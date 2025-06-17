#!/usr/bin/env python
"""
Script to test the rich text editor functionality.
"""
import os
import django

# Set up Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'techflex_cms.settings')
django.setup()

# Import models
from content.models import Service

# Create a test service with rich text content
test_service = Service.objects.create(
    title="Test Rich Text Service",
    summary="<p>This is a <strong>test</strong> summary with <em>rich</em> text.</p>",
    body_md="""
    <h2>This is a test of the rich text editor</h2>
    <p>This paragraph has <strong>bold</strong> and <em>italic</em> text.</p>
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ul>
    <p>This is a test of the rich text editor functionality.</p>
    """,
    featured=True,
    is_draft=False
)

print(f"Created test service: {test_service.title}")
print(f"Summary: {test_service.summary}")
print(f"Body (first 100 chars): {test_service.body_md[:100]}...")