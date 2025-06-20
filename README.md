# Techflex Official Website

This repository contains the Techflex website built with React and Vite, along with a headless CMS powered by Strapi v5.

## Project Structure

- **Frontend**: React + Vite application
- **CMS**: Strapi v5 headless CMS in the `techflex-cms` directory

## Frontend Setup

### Prerequisites

- Node.js 18+

### Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables in `.env.local`:
   ```
   GEMINI_API_KEY=your_gemini_api_key  # For AI features
   VITE_CMS_URL=http://localhost:1337  # Strapi CMS URL
   VITE_CMS_TOKEN=your_api_token_here  # Strapi API token
   ```

3. Run the app:
   ```bash
   npm run dev
   ```

## CMS Setup

The headless CMS is located in the `techflex-cms` directory. See [techflex-cms/README.md](techflex-cms/README.md) for detailed setup instructions.

### Quick Start

1. Navigate to the CMS directory:
   ```bash
   cd techflex-cms
   ```

2. Start the CMS with Docker Compose:
   ```bash
   docker compose up -d
   ```

3. Access the admin panel at http://localhost:1337/admin

4. Create an API token in the Strapi admin panel and add it to your frontend's `.env.local` file as `VITE_CMS_TOKEN`

## Content Management

The CMS provides management for:

- **Services**: Custom software solutions offered by Techflex
- **Insights/Blog**: Articles and thought leadership content
- **Case Studies**: Project examples and success stories
- **Authors**: Content creators and team members

## Development Workflow

1. Start the CMS first to ensure content is available
2. Run the frontend application
3. Use the Strapi admin panel to manage content
4. The frontend will fetch data from the CMS API

## Deployment

### Frontend

Deploy the React application to Vercel, Netlify, or similar platforms.

### CMS

Deploy the Strapi CMS to a server with Docker support or platforms like Render, Fly.io, or DigitalOcean App Platform.

See [techflex-cms/README.md](techflex-cms/README.md) for detailed deployment instructions.
#   t e c h f l e x - o f f i c i a l  
 