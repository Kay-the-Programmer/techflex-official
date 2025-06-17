"""techflex_cms URL Configuration"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

# Import viewsets
from content.api import ServiceViewSet, InsightViewSet, CaseStudyViewSet, AuthorViewSet

# Initialize the router
router = DefaultRouter()

# Register viewsets
router.register("services", ServiceViewSet)
router.register("insights", InsightViewSet)
router.register("case-studies", CaseStudyViewSet)
router.register("authors", AuthorViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("api/docs/", SpectacularSwaggerView.as_view(url_name="schema")),
    path("ckeditor/", include("ckeditor_uploader.urls")),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
