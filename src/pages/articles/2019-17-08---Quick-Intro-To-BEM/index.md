---
title: Quick Intro to BEM
date: '2019-08-17T22:40:32.169Z'
layout: post
draft: false
path: '/posts/quick-intro-to-bem/'
category: 'CSS'
tags:
  - 'CSS'
  - 'Naming Convention'
  - 'Methodology'
description: 'Just a quick look into using BEM for your CSS, this naming convention is a good practice to save yourself a lot of time thinking of a good class name for your next button.'
---

## The Set up

I have always struggled to find good names for my classes and I'm not very good at keeping things consistent when it comes to naming things in my project. So a senior at work pointed it out to me that maybe I should look into the BEM style of writing class names. I checked it out, now I just have to remember to use it while I am deciding my class names.

### B for Block

The smallest unit in your component is considered to be a block, so normal websites will have a link, a button, a text input and so much more. Each unit is a block.

```
/* Block component */
.btn {}
.link-item {}
```

### E for Element

Child of the block, the element's name denotes it's purpose.

```
/* Elements depend on the block */
.btn__text {}
.link-item__icon {}
```

### M for Modifier

Modifiers often state how they alter a block/element. Modifiers take the name of the block or element that they are modifying, followed by double dashes ( -- ) and what the selector is modifying.

```
/_ Modifier changes the style of the block _/
.btn--orange {}
.btn--small {}
.link-item--hidden {}

```
