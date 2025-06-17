# Techflex CMS

A Django-based content management system for the Techflex website.

## Features

- Django 5 with Django REST Framework
- Rich text editor for content management
- PostgreSQL database
- Token-based authentication
- OpenAPI documentation
- Docker support
- S3 storage for media files (optional)
- Preview mode for draft content

## Models

- **Services**: Custom software solutions offered by Techflex
- **Insights**: Blog posts and articles
- **Case Studies**: Client success stories
- **Authors**: Content creators

## API Endpoints

- `/api/services/` - List and detail views for services
- `/api/insights/` - List and detail views for blog posts
- `/api/case-studies/` - List and detail views for case studies
- `/api/authors/` - List and detail views for authors
- `/api/docs/` - API documentation
- `/api/schema/` - OpenAPI schema

## Setup

### Development

1. Create a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

   This includes django-ckeditor for rich text editing.

3. Run migrations:
   ```
   python manage.py migrate
   ```

4. Create a superuser:
   ```
   python manage.py createsuperuser
   ```

   Or use the provided script:
   ```
   python create_superuser.py
   ```

5. Run the development server:
   ```
   python manage.py runserver
   ```

### Docker

1. Build and start the containers:
   ```
   docker-compose up -d
   ```

2. Run migrations:
   ```
   docker-compose exec web python manage.py migrate
   ```

3. Create a superuser:
   ```
   docker-compose exec web python create_superuser.py
   ```

## Environment Variables

Create a `.env` file with the following variables:

```
# Django settings
SECRET_KEY=your-secret-key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Database configuration
DATABASE_URL=postgres://techflex:techflexpass@db:5432/techflex

# CORS settings
CORS_ALLOWED_ORIGINS=https://techflex.xyz,http://localhost:5173

# Preview mode
PREVIEW_TOKEN=your-preview-token

# S3 Storage (for production)
USE_S3=True
AWS_STORAGE_BUCKET_NAME=your-bucket-name
AWS_S3_REGION_NAME=your-region
AWS_S3_ACCESS_KEY_ID=your-access-key
AWS_S3_SECRET_ACCESS_KEY=your-secret-key
```

## Rich Text Editor

The CMS now includes a rich text editor (CKEditor) for content management. This allows content creators to:

- Format text (bold, italic, headings, etc.)
- Create lists and tables
- Insert and format images
- Add links
- Insert code snippets
- View and edit HTML source

The rich text editor is configured with two profiles:
- **Basic**: A simplified editor for short content like summaries and excerpts
- **Full**: A complete editor with all features including image upload for main content

The following fields use rich text editing:

- **Services**:
  - Summary (basic)
  - Body (full with image upload)

- **Insights**:
  - Excerpt (basic)
  - Body (full with image upload)

- **Case Studies**:
  - Summary (basic)
  - Problem, Solution, Impact (full with image upload)

- **Authors**:
  - Bio (basic)

To test the rich text editor functionality, you can run:
```
python test_rich_text.py
```

## Frontend Integration

Update your frontend API client to use the new endpoints:

```javascript
// Example fetch for services
const fetchServices = async () => {
  const response = await fetch('https://cms.techflex.xyz/api/services/');
  const data = await response.json();
  return data;
};

// Example fetch for a specific service
const fetchService = async (slug) => {
  const response = await fetch(`https://cms.techflex.xyz/api/services/${slug}/`);
  const data = await response.json();
  return data;
};

// Example fetch for draft content (preview mode)
const fetchDraft = async (type, slug, token) => {
  const response = await fetch(`https://cms.techflex.xyz/api/${type}/${slug}/?token=${token}`);
  const data = await response.json();
  return data;
};
```

## Deployment

1. Update the `.env` file with production settings
2. Build and push the Docker image
3. Deploy using Docker Compose or your preferred hosting platform

## License

This project is proprietary and confidential.
