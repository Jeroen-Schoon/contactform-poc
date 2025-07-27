## Proof of Concept - Contactform Webpage

This project is a simple proof of concept to show how I handle modern, cloud-native webapplications with Next.js, TypeScript, Tailwind, AWS Lambda en CDK.

_This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)._

## How to run

**To run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

**To run in production mode:**

```bash
npm run build
# then
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## What parts did I include

**Musts:**

- [x] At least 1 Next.js page with components.
- [x] Added responsiveness.
- [x] Styling with TailwindCSS.
- [x] Typescript.
- [x] The Next.js App Router.
- [x] Created an AWS Lambda handler in Typescript
- [x] Simple validation and Response
- [x] Defined at least 1 resource in Typescript as CDK
- [ ] Fetches data from backend

**Optional:**

- [x] Extra components.
- [x] Deployed on AWS (But it's not working as intended.)

## The TODOs:

- [x] Make logo on main page smaller.
- [x] Make webapp responsive.
- [x] Create AWS Account.
- [x] Update form submit - POST the input values.
- [x] Deploy on AWS.
- [x] Rewrite README.
- [x] Clean-up code.
- [ ] Make backend function to fetch data from.
- [ ] Create working lambda function.
