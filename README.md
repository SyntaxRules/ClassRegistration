This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Overview

This is for registering students in classes. It is designed to be dead simple. The user logs in, selects classes for each of their students and logs out. It contains the following pages:

- Home/Login page: The index/main page. It only contains a simple welcome prompt and login form. Users log in from this page
- Student registration page: Where actually registering students occurs. Students are children of the user
- Logout page: for logging out when finished, redirects the the home/login page
- Admin page: Allows admins to add & edit & deactivate Users and their corresponding Students. Displays current registrations. Allows editing of current registrations. In the near future will allow terms & classes to be managed.
