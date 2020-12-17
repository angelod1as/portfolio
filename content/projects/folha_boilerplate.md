---
date: 2018-01-01T02:00:00.000Z
title: Folha Boilerplate
desc: Projects using Folha's Art desk boilerplate and how we built it
live: ''
tags:
  - coding
  - folha
image: /assets/opening/boilerplate.jpg
---

Folha de S.Paulo's main online editorial software is bulky and full of features but, in many projects, Folha's journalists needed a different approach on reporting some subjects.

We, the arts department own digital and interactive team, developed a custom boilerplate for these kinds of projects. With this ever growing boilerplate we had the power to publish special stories, update bugs within all of them with a single change and add features that Folha's publisher didn't support.

You can see some of the projects below. For technical info, [click here](#technical). It's interesting to see the boilerplate changing over time.

## Trans-amazonian highway - desolation and crime

Just over 40 years after the inauguration of a road which is a symbol of Brazil’s military dictatorship, Folha travelled almost the entire length of the stretch passing through the Amazon, from Altamira in Pará to Lábrea in Amazonas. Less than 10% of this 1751 km stretch is paved.

[Click here to see it live — in english](http://arte.folha.uol.com.br/cotidiano/2016/transamazonica/en/)


## Um ano de lama

In engish, 'a year of mud' depicts what remained and what happened after Fundão barrage ruptured. The tragedy happened at november 5 2015 and killed 19 people — 40 billion litters of contaminated mud spreaded over 650 km.

[Click here to see it live — in portuguese](http://arte.folha.uol.com.br/cotidiano/2016/um-ano-de-lama/).

## Corrida contra o tempo

In english, 'a race against time' is a special feature about changes in social security during Michel Temer's government, in Brazil.

The social security calculator, at the first chapter, is a highlight. For the user, just two buttons between paragraphs. For the developers, more than half of development time invested in the tool's creation.

[Click here to see it live — in portuguese](http://arte.folha.uol.com.br/mercado/2017/previdencia/introducao/)

## Viagem ao extremo oriente do Brasil

In english, 'a trip to Brazil's extreme orient' is a special feature about the furthermost islands on Brazil's coast — Saint Peter and Saint Paul Archipelago. With amazing photos and videos, the story tells about fauna and flora around the tiny island once visited by Charles Darwin.

Darwin's 'Origin of the Species' was written after his trip to the archipelago.

There's even a video made by myself.

<div class="video" title="" data-video="jv2oYhIdbxo"></div>

[Click it here to see it live — in portuguese](https://arte.folha.uol.com.br/ciencia/2017/arquipelago/historia/)

## Technical

We started with Gulp, HTML, CSS and vanilla Javascript.

As things progressed, we started moving pieces around and finding new tools to use, like Stylus for CSS, Pug for HTML and ES6 — with Babel — for Javascript.

Before we knew, we were using Webpack and a very long list of tools, compilers, transpilers, helpers, autocompleters... our package.json grew longer as time passed.

The main issue was building these projects from Folha's publisher files and formats, keeping things beautiful, modular, lightweight and fast. All of that while hardcoding the text to make Google's robots able to index everything.

Understanding that this boilerplate was our main tool since 2015 maybe clears why we didn't go straight to 'create react app'.

With Folha's new publishing tool, this boilerplate will soon be retired.