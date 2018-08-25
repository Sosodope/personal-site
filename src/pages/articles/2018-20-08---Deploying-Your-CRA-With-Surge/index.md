---
title: Deploying Your CRA with Surge
date: '2018-08-20T22:40:32.169Z'
layout: post
draft: false
path: '/posts/deploying-your-cra-with-surge/'
category: 'Web Development'
tags:
  - 'React'
  - 'Web Development'
description: 'A quick guide for deploying your Frontend React App with Surge'
---

## The Set up

Now that you have your React App complete and good to go, we need to figure out how to deploy it. Luckily, we've got tons of fast and simple options.

For this guide we will be using [Surge](https://surge.sh/).

- Install Surge

```
npm install -g surge
```

- Build your app
  From you terminal, cd to your project folder

```
cd your-react-project
```

Then with the build script, this adds a production-ready version of your app.

```
npm run build
```

You should see a `build` directory added to your files.

- Create an Account on surge.sh
  Now we need to specify the build folder as the project path.

```
cd build
```

Then we run the Surge command to set up an account.
It will prompt you to enter an email address and a password and after that you need to confirm the project path. Hit `Enter` to continue.

You can now click or follow the link provided to see your project live.

- Use your Command Line to deploy your new project on surge
  To update your project, simply run the Surge command again and it will automatically redeploy the latest changes to the same URL.

**More to Come**
