# Mastering Nuxt 3

Welcome to the Mastering Nuxt 3 code repo!

The finished app is here on the `main` branch.

Each lesson has it's own dedicated branch if you'd like to explore or check out the code at that specific point. eg. [lesson 5-3](https://github.com/MasteringNuxt/mastering-nuxt-3/tree/5-3). Just append `/tree/<lesson>` to the end of the GitHub URL to access a specific branch directly. For example, to get to the branch for lesson `5-3` we'd go to `https://github.com/MasteringNuxt/mastering-nuxt-3/tree/5-3`.

## Setup

You will need to add your own `.env` file and fill with the appropriate variables.

Here are the relevant lessons:

- Supabase: [Lesson 4-5](https://masteringnuxt.com/nuxt3/lessons/4-5-adding-environment-variables)
- Prisma: [Lesson 5-9](https://masteringnuxt.com/nuxt3/lessons/5-9-setting-up-prisma)
  - Note: the details on setting up Prisma have changed somewhat. You'll need to add `DIRECT_DB_URL` and `DATABASE_URL`to your`.env` file following [these instructions](https://supabase.com/partners/integrations/prisma#connection-pooling-with-supabase).
- Stripe: [Lesson 7-7](https://masteringnuxt.com/nuxt3/lessons/7-7-setting-up-stripe)

Your `.env` file will have these fields:

```
SUPABASE_URL=""
SUPABASE_KEY=""
DIRECT_DB_URL=""
DATABASE_URL=""
NUXT_PUBLIC_STRIPE_KEY=""
NUXT_STRIPE_SECRET=""
```

## Deploying to Netlify

There is an included `netlify.toml` that has build and deploy instructions so you don't need to configure much on Netlify itself.

It's important that the `build` command in `package.json` also includes `prisma generate` and that we include `prisma` as a dependency. Otherwise, the Prisma client will not generate correctly.

## Running locally

First, install dependencies with `pnpm install`, then run `pnpm dev`.

On later lessons that include Prisma, you'll need to run `prisma generate` after installing dependencies. It's _supposed_ to automatically do this after installing, but can be quite flaky.
# mastering-nuxt-3
