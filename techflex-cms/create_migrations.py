#!/usr/bin/env python
"""
Script to create initial migrations for the Django models.
"""
import os
import subprocess
import django

# Set up Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'techflex_cms.settings')
django.setup()

# Create migrations
print("Creating migrations...")
subprocess.run(["python", "manage.py", "makemigrations", "content"])

# Apply migrations
print("\nApplying migrations...")
subprocess.run(["python", "manage.py", "migrate"])

print("\nMigrations created and applied successfully!")