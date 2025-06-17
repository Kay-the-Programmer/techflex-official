"""
ASGI config for techflex_cms project.
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'techflex_cms.settings')

application = get_asgi_application()