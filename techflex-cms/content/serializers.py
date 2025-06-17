from rest_framework import serializers
from .models import Service, Author, Insight, CaseStudy

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = "__all__"

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = "__all__"

class InsightSerializer(serializers.ModelSerializer):
    author_name = serializers.StringRelatedField(source='author')
    
    class Meta:
        model = Insight
        fields = "__all__"

class CaseStudySerializer(serializers.ModelSerializer):
    service_name = serializers.StringRelatedField(source='service')
    
    class Meta:
        model = CaseStudy
        fields = "__all__"