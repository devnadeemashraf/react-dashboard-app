# Phase Two: Mock Server & React-Aria Setup

This document provides a detailed walkthrough of how I planned the project before starting with building it. I will explain each step I took, along with the reasoning behind it.

> **Heads-up:** This will be a **very** text-heavy document. I might skip minor details to keep it concise and easy to digest while focusing on the essential parts.

---

## Spitting Data

Now that I had a good idea of what the dashboard should look like and what components it should have, I needed to set up a mock server to serve the data to the dashboard. This should, hopefully, conclude my project setup.

The very first thing I had to do was to lookup how to set up a mock server in React. I had heard about **MirageJS** before but I had not used it in the past and all I knew was that it was a good tool for this job.

There was an alternative to MirageJS that I had heard about, **JSON Server**, but I had decided to go with MirageJS as it was more powerful and had a lot more features than JSON Server.

The documentation for MirageJS was good but I had to take help of **Deepseek r1** to understand how to set it up properly and how to configure it to serve the data that I had.

_I also did not want to spend much time on it as I had a lot of other things to do and I was sure that Deepseek r1 would be able to guide me through this and also because these things are not often used in real-world projects._

I will not be walking you through the setup of MirageJS as it is pretty straightforward and the documentation/AI Tools are good enough to get you started.

## React ARIA Setup

I then started with creating my custom "Button" component to see if the the Server I had set up was working properly and if I was able to fetch the data from it.

While doing that I thought of, rather than creating the components from scratch, using a library that would help me with the accessibility of the components that I was going to create.

Afterall, this projects is meant to help me learn and grow as a developer and I had heard about **React ARIA** before and I thought this would be a good opportunity to learn about it and use it in a project.

**React ARIA** is a library that provides a set of React Hooks and Components that helps in building accessible UI components. It has good documentation and It was pretty easy to get started with it.

I had my own Button component in place and I was able to fetch the data from the server and display it on the console.

I was now ready to start building the Dashboard. But before that... styling!

## SCSS Setup

I chose SCSS just for a change. I had been using TailwindCSS for a while now and I thought it would be a good idea to use SCSS for this project, to expand on to my knowledge of CSS and styling.

Adding SCSS involed adding a few dependencies and setting up the configuration for it.

I knew that I had to add in rules for the SCSS files in the Webpack configuration and I had to add the SCSS loader to the Webpack configuration.

I did just that, installed some dependencies for CSS and SCSS to work and Voila! I was ready to start with the Dashboard.

The Dependencies installed were:

```bash
npm install -D css-loader style-loader sass sass-loader MiniCssExtractPlugin
```

You can read about the Rules and Loaders that I added in the Webpack configuration in the `webpack.config.js` file.

## Summary

At this stage, I felt confident as:

- I had my mock server set up and running.
- I was able to fetch the data from the server and display it on the console.
- I had my custom Button component in place.
- I had React ARIA set up and running.
- I had SCSS set up and running.

With this, I was ready to start building the Dashboard.

> _Next up: Component Design and Architecture._
