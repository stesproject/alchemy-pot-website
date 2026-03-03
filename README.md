# Alchemy Pot Website

My portfolio website, featuring a blog, projects showcase and resources section. The site is styled with Tailwind CSS and includes search functionality powered by Pagefind.

## 🚀 Features

- ⚡️ Built with Astro 5.x for optimal performance
- 🎨 Styled with Tailwind CSS
- 📝 MDX support for rich content
- 🔍 Full-text search with Pagefind
- 📱 Fully responsive design
- 🌐 RSS feed support
- 🗺️ Automatic sitemap generation
- 🎯 TypeScript support

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/)

## 🛠️ Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/stesproject/alchemy-pot-website.git
cd alchemy-pot-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:4321` (or another port if 4321 is already in use).

### 4. Build for Production

To create a production build locally:

```bash
npm run build
```

This will:
1. Run TypeScript checks with `astro check`
2. Build the site into the `dist/` directory

### 5. Preview Production Build

After building, you can preview the production build locally:

```bash
npm run preview
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run start` - Alias for `npm run dev`
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## 🚢 Deployment

This project is configured to deploy to **Firebase Hosting**.

### Prerequisites for Deployment

1. Install Firebase CLI globally:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase (if not already done):
```bash
firebase init hosting
```

### Deploy to Firebase

#### Option 1: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to Firebase:
```bash
firebase deploy
```

Site will be deployed to `https://alchemy-pot.web.app`

#### Option 2: Deploy to a Preview Channel

To test deployment before going live:
```bash
firebase hosting:channel:deploy preview
```

### Continuous Deployment

For automatic deployments, a GitHub Action is already set up.


## 📁 Project Structure

```
/
├── public/             # Static assets
│   ├── favicon.svg
│   ├── files/         # Downloadable files
│   └── res/           # Resources (images, videos)
├── src/
│   ├── components/    # Astro components
│   ├── content/       # Content collections (blog, projects, etc.)
│   ├── layouts/       # Page layouts
│   ├── pages/         # File-based routing
│   ├── styles/        # Global styles
│   ├── i18n/          # Internationalization
│   ├── lib/           # Utility functions
│   └── consts.ts      # Site configuration
├── astro.config.mjs   # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Dependencies and scripts
```

## 🎨 Customization

### Site Configuration

Edit `src/consts.ts` to customize site metadata, navigation and other settings.

### Styling

- Global styles: `src/styles/global.css`
- Tailwind configuration: `tailwind.config.mjs`
- Component-level styles: Use Tailwind classes in `.astro` components

### Content

- Blog posts: Add `.md` or `.mdx` files to `src/content/blog/`
- Projects: Add content to `src/content/projects/`
- Resources: Add content to `src/content/resources/`

## 🔧 Technologies Used

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Typography**: [Geist Sans](https://vercel.com/font) & [Geist Mono](https://vercel.com/font)
- **Search**: [Pagefind](https://pagefind.app)
- **Content**: [MDX](https://mdxjs.com)
- **Deployment**: [Firebase Hosting](https://firebase.google.com/docs/hosting)
- **Language**: [TypeScript](https://www.typescriptlang.org)

Built with ❤️ using Astro
