# Cinemorix Static Portfolio

This repository contains the source code for the official Cinemorix static portfolio website. It is built with Vite, React, TypeScript and shadcn‑ui components.


## Project info

The live site is served from the root of the repository. Ensure the `public/` folder contains the correct branding assets (favicons, logos, etc.) before deploying.

## How can I edit this code?

There are several ways of editing your application.


**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes; the repository behaves like a standard git project.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

A static build is produced with `npm run build` and the contents of `dist/` can be deployed to any static hosting provider (GitHub Pages, Netlify, Vercel, etc.).

## Can I connect a custom domain?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Cinemorix Static Portfolio

This project is configured as a fully static React portfolio website.

- No admin panel routes
- No Supabase/database dependency
- No backend environment variables required
- Content is managed directly in local source files under `src/`
