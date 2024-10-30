# 2038

An online countdown timer named "2038", aimed at marking the moment at 03:14:07 UTC on 19 January 2038. This application combines Node.js and the Express framework for backend functionality while utilizing vanilla JavaScript and Bootstrap on the frontend. It showcases a minimalistic design, focusing on a monochrome grey color palette and user accessibility.

## Overview

"2038" leverages Next.js for both backend and frontend, serving static files and employing React for rendering. The frontend is styled with Bootstrap, ensuring a responsive and accessible user experience. The project maintains a minimalist aesthetic, emphasizing simplicity and functionality.

## Features

- **Dynamic Countdown:** A countdown to 03:14:07 UTC on 19 January 2038, with flexible display options for time units.
- **User Interactivity:** Allows users to customize the countdown display by selecting specific time units. This choice enhances user engagement but resets upon page refresh or revisit.
- **Current Unix Time Display:** The application displays the current time since the Unix epoch in a human-readable format and as a 32-bit signed integer, enhancing the application's informative value.
- **Accessibility:** The application is developed with accessibility in mind, supporting screen readers and keyboard navigation, and striving for WCAG compliance.

## Getting Started

### Requirements

- Node.js
- npm (Node Package Manager)

### Quickstart

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies with `npm install`.
4. Start the development server using `npm run dev`.
5. Open your web browser and go to `http://localhost:3000` to view the application.

### Deployment on Netlify

To deploy the application on Netlify:
1. Ensure your application is properly set up for Next.js deployment. The `npm run build` script builds the Next.js application.
2. Follow Netlify's documentation to deploy your Next.js project. You will need to link your GitHub repository and set the build command as `npm run build` and the publish directory as `.next` in Netlify's site settings.

The site is available at https://countdownto2038.netlify.app.

### License

Copyright (c) 2024. Released under the MIT license.
