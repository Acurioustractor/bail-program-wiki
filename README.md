# BAIL Program Wiki with TinaCMS

A modern, content-manageable wiki for the Be An Indigenous Leader (BAIL) Program, built with Next.js and TinaCMS.

## Features

- ✅ Visual content editor at `/admin`
- ✅ Three-column wiki layout with sidebar navigation
- ✅ CAMPFIRE framework integration
- ✅ Community voices and media galleries
- ✅ Partner network management
- ✅ Responsive design
- ✅ Git-based content management
- ✅ Vercel deployment ready

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your TinaCMS credentials
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Access the admin**
   - Website: http://localhost:3000
   - Admin panel: http://localhost:3000/admin

## Content Management

### Adding Content

1. Go to `/admin` in your browser
2. Click "Add New" for any content type:
   - **Sections**: Main wiki pages
   - **Voices**: Community testimonials
   - **Media**: Videos, photos, audio, documents
   - **Partners**: Network collaborators
   - **Settings**: Site configuration

### Content Types

- **Wiki Sections**: Main content areas with rich text, statistics
- **Community Voices**: Elder voices, youth perspectives, family impacts, success stories
- **Media Gallery**: Videos, photos, audio stories, documents
- **Network Partners**: Team members, community partners, funding partners, cultural advisors
- **Site Settings**: Title, subtitle, footer text

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial BAIL Program wiki"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repo to Vercel
   - Add environment variables in Vercel dashboard
   - Deploy automatically on push

3. **Set up TinaCMS**
   - Create account at [tina.io](https://tina.io)
   - Get your Client ID and Token
   - Add to Vercel environment variables

### Environment Variables

```
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id
TINA_TOKEN=your_token
NEXT_PUBLIC_EDIT_BRANCH=main
```

## Project Structure

```
bail-program-cms/
├── components/           # React components
│   ├── WikiLayout.js    # Main layout with sidebar
│   └── Section.js       # Content sections
├── content/             # Markdown content files
│   ├── sections/        # Wiki sections
│   ├── voices/          # Community voices
│   ├── media/           # Media gallery items
│   ├── partners/        # Network partners
│   └── settings/        # Site settings
├── pages/               # Next.js pages
│   ├── _app.js         # App configuration
│   └── index.js        # Home page
├── styles/              # CSS styles
├── tina/               # TinaCMS configuration
│   ├── config.js       # Schema and collections
│   └── queries.js      # GraphQL queries
└── public/             # Static assets
```

## CAMPFIRE Framework

The wiki is organized around the CAMPFIRE strategic framework:

- **C**ulture - Indigenous heritage and traditions
- **A**ncestral Wisdom - Traditional knowledge systems
- **M**entoring - Guidance and leadership development
- **P**ersonal Growth - Individual development journey
- **F**itness - Physical health and outdoor activities
- **I**dentity - Cultural identity strengthening
- **R**esilience - Building strength and perseverance
- **E**mpowerment - Leadership and community engagement

## Support

For questions about the BAIL Program, visit [bailprogram.org](https://bailprogram.org) or contact brodie@bailprogram.org.