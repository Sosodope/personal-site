---
title: Styling with Bulma(Sass)
date: '2018-08-29T22:40:32.169Z'
layout: post
draft: false
path: '/posts/styling-with-bulma/'
category: 'Web Development'
tags:
  - 'React'
  - 'Styling'
  - 'Web Development'
description: 'Styling your React App with Bulma, using Sass'
---

## The Set up

After you create a new project with _Create-React-App_, navigate into the new project folder to start adding our CSS Preprocessor.

Then with the build script, this adds a production-ready version of your app.

Ordinarily, we could watch for updates in a Sass file with the `--watch` flag. This keeps track of changes in the Sass file and re-compiles the CSS every time we save changes. This is suitable for smaller projects.

However, here for our CRA project, the CRA team recommends using Chokidar. It's a command line interface for all of our Sass files.

To add Chokidar to your project:

```
npm install --save node-sass-chokidar
```

Or

```
yarn add node-sass-chokidar
```

Next, to run `watch-css` automatically with `npm start` or `yarn start` we are going to need to run `build-css` as a part of `npm run build` and have them run parallely.
To solve this, we need to install another package:

```
npm install --save npm-run-all
```

Or

```
yarn add npm-run-all
```

Finally, we need to update the `package.json` to replace some of the scripts as below:

```
"scripts": {
     "build-css": "node-sass-chokidar src/ -o src/",
     "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
-    "start": "react-scripts start",
-    "build": "react-scripts build",
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-css start-js",
+    "build-js": "react-scripts build",
+    "build": "npm-run-all build-css build-js",
     "test": "react-scripts test --env=jsdom",
     "eject": "react-scripts eject"
   }
```

So we remove the scripts with `-` in the front and add the ones with the `+`.

Now, you should be able to create your Sass file and once you hit save it will create a new Css file or update the Css file if it already exists.
