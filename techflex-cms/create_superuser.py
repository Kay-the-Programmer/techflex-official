#!/usr/bin/env python
"""
Script to create a superuser for the Django admin interface.
"""
import os
import django

# Set up Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'techflex_cms.settings')
django.setup()

# Import User model
from django.contrib.auth.models import User

# Check if superuser already exists
if not User.objects.filter(username='admin').exists():
    # Create superuser
    User.objects.create_superuser('admin', 'admin@techflex.xyz', 'admin')
    print('Superuser created successfully!')
else:
    print('Superuser already exists.')