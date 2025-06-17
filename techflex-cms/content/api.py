from rest_framework import viewsets, permissions
from .models import Service, Author, Insight, CaseStudy
from .serializers import ServiceSerializer, AuthorSerializer, InsightSerializer, CaseStudySerializer

class PublicReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow read-only access to public (non-draft) items.
    """
    def has_permission(self, request, view):
        # Allow GET, HEAD, OPTIONS requests
        return request.method in permissions.SAFE_METHODS
    
    def has_object_permission(self, request, view, obj):
        # Allow GET, HEAD, OPTIONS requests for non-draft items
        if request.method in permissions.SAFE_METHODS:
            return not getattr(obj, 'is_draft', False)
        return False

class PreviewPermission(permissions.BasePermission):
    """
    Custom permission to allow preview access with a token.
    """
    def has_permission(self, request, view):
        from django.conf import settings
        # Check if the request has a valid preview token
        preview_token = request.query_params.get('token')
        return preview_token == settings.PREVIEW_TOKEN

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all().order_by('title')
    serializer_class = ServiceSerializer
    lookup_field = 'slug'
    
    def get_permissions(self):
        if self.action == 'list' or self.action == 'retrieve':
            # For list and retrieve actions, check if it's a preview request
            if 'token' in self.request.query_params:
                return [PreviewPermission()]
            return [PublicReadOnly()]
        # For other actions (create, update, delete), require authentication
        return [permissions.IsAuthenticated()]
    
    def get_queryset(self):
        queryset = super().get_queryset()
        # If it's not a preview request, filter out draft items
        if 'token' not in self.request.query_params:
            queryset = queryset.filter(is_draft=False)
        return queryset

class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all().order_by('name')
    serializer_class = AuthorSerializer
    
    def get_permissions(self):
        if self.action == 'list' or self.action == 'retrieve':
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]

class InsightViewSet(viewsets.ModelViewSet):
    queryset = Insight.objects.all().order_by('-created_at')
    serializer_class = InsightSerializer
    lookup_field = 'slug'
    
    def get_permissions(self):
        if self.action == 'list' or self.action == 'retrieve':
            if 'token' in self.request.query_params:
                return [PreviewPermission()]
            return [PublicReadOnly()]
        return [permissions.IsAuthenticated()]
    
    def get_queryset(self):
        queryset = super().get_queryset()
        # Filter by tags if provided
        tags = self.request.query_params.getlist('tags')
        if tags:
            from django.db.models import Q
            import functools
            import operator
            # Create a list of Q objects for each tag
            q_objects = [Q(tags__contains=[tag]) for tag in tags]
            # Combine the Q objects with OR operator
            queryset = queryset.filter(functools.reduce(operator.or_, q_objects))
        
        # If it's not a preview request, filter out draft items
        if 'token' not in self.request.query_params:
            queryset = queryset.filter(is_draft=False)
        return queryset

class CaseStudyViewSet(viewsets.ModelViewSet):
    queryset = CaseStudy.objects.all().order_by('client_name')
    serializer_class = CaseStudySerializer
    lookup_field = 'slug'
    
    def get_permissions(self):
        if self.action == 'list' or self.action == 'retrieve':
            if 'token' in self.request.query_params:
                return [PreviewPermission()]
            return [PublicReadOnly()]
        return [permissions.IsAuthenticated()]
    
    def get_queryset(self):
        queryset = super().get_queryset()
        # If it's not a preview request, filter out draft items
        if 'token' not in self.request.query_params:
            queryset = queryset.filter(is_draft=False)
        return queryset