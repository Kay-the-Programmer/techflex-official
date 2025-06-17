from django.contrib import admin
from .models import Service, Author, Insight, CaseStudy

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("title", "featured", "is_draft", "updated_at")
    list_filter = ("featured", "is_draft")
    search_fields = ("title", "summary")
    prepopulated_fields = {"slug": ("title",)}
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'summary', 'featured', 'is_draft')
        }),
        ('Content', {
            'fields': ('body_md',),
            'classes': ('wide',)
        }),
        ('Media', {
            'fields': ('icon', 'hero_image'),
        }),
    )

@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ("name", "updated_at")
    search_fields = ("name", "bio")
    fieldsets = (
        ('Personal Information', {
            'fields': ('name', 'avatar', 'bio')
        }),
        ('Social Media', {
            'fields': ('twitter', 'linkedin'),
            'classes': ('collapse',)
        }),
    )

@admin.register(Insight)
class InsightAdmin(admin.ModelAdmin):
    list_display = ("title", "author", "is_draft", "updated_at")
    list_filter = ("is_draft", "author")
    search_fields = ("title", "excerpt", "body_md")
    prepopulated_fields = {"slug": ("title",)}
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'author', 'is_draft')
        }),
        ('Preview Content', {
            'fields': ('excerpt', 'cover_image', 'tags')
        }),
        ('Full Content', {
            'fields': ('body_md',),
            'classes': ('wide',)
        }),
    )

@admin.register(CaseStudy)
class CaseStudyAdmin(admin.ModelAdmin):
    list_display = ("client_name", "service", "is_draft", "updated_at")
    list_filter = ("is_draft", "service")
    search_fields = ("client_name", "summary", "problem", "solution", "impact")
    prepopulated_fields = {"slug": ("client_name",)}
    fieldsets = (
        ('Basic Information', {
            'fields': ('client_name', 'slug', 'service', 'is_draft')
        }),
        ('Overview', {
            'fields': ('summary',)
        }),
        ('Case Study Details', {
            'fields': ('problem', 'solution', 'impact'),
            'classes': ('wide',)
        }),
        ('Gallery', {
            'fields': ('gallery',),
            'classes': ('collapse',)
        }),
    )
