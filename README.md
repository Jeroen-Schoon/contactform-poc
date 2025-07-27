## Proof of Concept - Contactform Webpage

This project is a simple proof of concept to show how I handle modern, cloud-native webapplications with Next.js, TypeScript, Tailwind, AWS Lambda en CDK. _This is also my first project to be working with said technologies._

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

**Optional:**

- [x] Extra components.
- [x] Deployed on AWS (But it's not working as intended.)

## Conclusion

**First, I want to note the following:**

This is my first time working with Next.js (and React), TailwindCSS, TypeScript, AWS Lambda, and the AWS CDK.
I've worked on this project for about a week, although not every day or every hour.
It has been a simple, short, but very educational experience as an introduction to these technologies.

#### What did I use and why?

I chose to create one very simple homepage and one more complex contact form page.
This allowed me to demonstrate how I work with the Next.js App Router.

The app is responsive. For example, I implemented a hamburger menu in the navbar for navigation between the two pages on smaller screens.
A simple animation is shown when clicking the hamburger menu icon.

The styling is relatively minimal. I have to admit that TailwindCSS took some time to get used to.
I also intentionally kept the styling simple so I could focus more on other parts of the project.

I generated a custom logo and used a fictional company name to make the web app feel a bit more realistic.
I also implemented support for both light and dark mode, using the same color palette as the custom logo.
The theme adapts based on the user's browser settings. (You can switch between light and dark mode in your browser settings.)

I created around four components to demonstrate how I try to keep my code structured and modular.

The Lambda function includes basic validation and is deployed to AWS.
Setting everything up on AWS took many hours since it was all new to me.
To be honest, I still have a lot to learn about AWS, as this project wasn’t enough for me to fully grasp it.

I built a contact form that, when submitted, calls the deployed Lambda function.
If successful, you should see a server response in the browser console.
