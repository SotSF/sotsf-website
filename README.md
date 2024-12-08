<div align="center">
  <h2>Servants of the Secret Fire</h2>
  <p><a href="https://se.cretfi.re"> https://se.cretfi.re</a></p>
</div>

## Development

First, follow these one-time steps to install system-level dependencies:

```bash
# install nvm, which manages node version installs
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
# use nvm to install the correct version of node
nvm install
# install pnpm, our package manager of choice, via corepack
corepack enable
```

Install repository dependencies:

```bash
pnpm install
```

Then start the server using this command:

```bash
pnpm dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the website running locally.

## Features

This repository was created from a template. Here are some of its features (as well as features that we have added):

- ⚡️ Next.js 14 with App Router
- ⚛️ React 18
- ✨ TypeScript
- 💨 Tailwind CSS 3 — Configured with CSS Variables to extend the **primary** color
- 💎 Pre-built Components — Components that will **automatically adapt** with your brand color, [check here for the demo](https://tsnext-tw.thcl.dev/components)
- Additionally [shadcn](https://ui.shadcn.com/) components
- 🃏 Jest — Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using `@/` prefix
- 📏 ESLint — Find and fix problems in your code, also will **auto sort** your imports
- 💖 Prettier — Format your code consistently
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- ⏰ Release Please — Generate your changelog by activating the `release-please` workflow
- 👷 Github Actions — Lint your code on PR
- 🚘 Automatic Branch and Issue Autolink — Branch will be automatically created on issue **assign**, and auto linked on PR
- 🔥 Snippets — A collection of useful snippets
- 👀 Open Graph Helper Function — Awesome open graph generated using [og](https://github.com/theodorusclarence/og), fork it and deploy!
- 🗺 Site Map — Automatically generate sitemap.xml
- 📦 Expansion Pack — Easily install common libraries, additional components, and configs.

## Deploying

We host the SotSF website on Vercel. Vercel does not allow you to deploy an organization repo like `sotsf/sotsf-website` on their free hobby tier. So instead, we deploy `secret-fire-dev/sotsf-website`. `secret-fire-dev` is a shared GitHub account that exists for this sole reason. `secret-fire-dev/sotsf-website` is an exact copy of the `sotsf/sotsf-website` repo.

To deploy, all you have to do is to push a new commit to the `main` branch of the `secret-fire-dev/sotsf-website` repo. First you will need to be a collaborator on the `secret-fire-dev/sotsf-website` repo, so just ask around for that.

For ease of development, you should clone `sotsf/sotsf-website`. Then you can set up a new remote called `prod` to point at `secret-fire-dev/sotsf-website`:

```
git remote add prod ssh://git@github.com/secret-fire-dev/sotsf-website.git
```

And then to deploy would just look like:

```
git push prod
```

When you push a new commit to the main branch, there will be a Vercel action that actually performs the deploy. You can click it for more details if desired, but you should see your changes go live 3-4 minutes after running `git push prod`.
