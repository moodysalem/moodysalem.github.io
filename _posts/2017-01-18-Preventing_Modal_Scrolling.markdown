---
layout: post
title:  "Prevent body scrolling via react-side-effect"
date:   2017-01-18 13:30
categories: react modal overlay fixed positioning layout declarative imperative side effect
---

A common issue people run into when using React is manipulating html outside of the React tree to in response to state changes. [react-side-effect](https://github.com/gaearon/react-side-effect) is the generic solution for solving this problem declaratively, and it's easy to write higher order components that have particular side effects for easy re-use.

A very common case of manipulating html elements that would typically not live under the react node is preventing the body from scrolling when a fixed overlay element is being displayed. iOS has many quirks and it's hard to do this exactly right in a way that works in Firefox and Chrome, so I threw together a higher order component [react-fixed-page](https://github.com/moodysalem/react-fixed-page) to handle this for you. We currently use this component in [fastmodel-layout-components](https://github.com/FastModelSports/fastmodel-layout-components) for both the [Sidebar](https://fastmodelsports.github.io/fastmodel-layout-components/#/Sidebar) and [Modal](https://fastmodelsports.github.io/fastmodel-layout-components/#/Modal) components.

In addition, you may want to manipulate head tags so you could for example share an index.html template across multiple applications, or change meta information based on the current page. The NFL team has released [react-helmet](https://github.com/nfl/react-helmet) which works perfectly for this use case.

What other use cases exist for this powerful higher order component?