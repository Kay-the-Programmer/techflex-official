from django.db import models
from django.utils.text import slugify
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField

class Timestamped(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Service(Timestamped):
    title = models.CharField(max_length=120, unique=True)
    slug = models.SlugField(max_length=140, unique=True, blank=True)
    summary = RichTextField(config_name='basic')
    body_md = RichTextUploadingField()  # Rich text with image upload
    icon = models.ImageField(upload_to="icons/")
    hero_image = models.ImageField(upload_to="hero/")
    featured = models.BooleanField(default=False)
    is_draft = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

class Author(Timestamped):
    name = models.CharField(max_length=80)
    avatar = models.ImageField(upload_to="avatars/")
    bio = RichTextField(config_name='basic', blank=True)
    twitter = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)

    def __str__(self):
        return self.name

class Insight(Timestamped):
    title = models.CharField(max_length=160)
    slug = models.SlugField(max_length=180, unique=True, blank=True)
    excerpt = RichTextField(config_name='basic')
    cover_image = models.ImageField(upload_to="covers/")
    body_md = RichTextUploadingField()
    tags = models.JSONField(default=list, blank=True)
    author = models.ForeignKey(Author, on_delete=models.SET_NULL, null=True)
    is_draft = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

class CaseStudy(Timestamped):
    client_name = models.CharField(max_length=120)
    slug = models.SlugField(max_length=160, unique=True, blank=True)
    summary = RichTextField(config_name='basic')
    problem = RichTextUploadingField()
    solution = RichTextUploadingField()
    impact = RichTextUploadingField()
    gallery = models.JSONField(default=list, blank=True)  # list of image URLs
    service = models.ForeignKey(Service, on_delete=models.SET_NULL, null=True)
    is_draft = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.client_name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.client_name
