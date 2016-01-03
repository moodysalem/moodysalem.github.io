---
layout: post
title:  "A Stab at Declarative Data Fetching"
date:   2016-01-02 20:36
categories: react ajax jquery backbone declarative
---

I'm using *[React](https://facebook.github.io/react/)* as a view layer in my **[Backbone](http://backbonejs.org)** applications, but it seems like the time has come for Backbone
 to fall to the wayside in favor of newer SPA architectures such as flux and react-router.
I've been itching for a declarative approach to fetching and saving data,
[and it seems like many others are thinking about this problem.](http://stackoverflow.com/questions/26632415/where-should-ajax-request-be-made-in-flux-app)
I haven't found anything that does it quite as simply as Backbone. Unfortunately Backbone Models
and Collections are mutable, so you can't avoid the complexity of listening to models and collections in a
React application.

There are many mixins to support dealing with mutability in Backbone Models and Collections,
and the code is not difficult to write, but it would be ideal to drop Backbone completely
since React components are much easier to reason about.

I'm trying to solve this problem by writing a React component called [react-sync](https://github.com/moodysalem/react-sync)
that deals with fetching and saving data, and gives the state of those operations to its child component as properties,
as well as handlers that can be called to save and delete the data.

The idea is that you use this component to wrap children components that need to fetch data or save data to some API,
and then the children components no longer have to worry about how exactly to get or save that data.
They can simply read it from `this.props.data`, and CRUD it via `this.props.onSave` and `this.props.onDestroy`.
The *react-sync* component then fetches the data and provides it as a 'data' prop to its only child component
via `React#cloneElement`.

I'm still looking for feedback and discussion on the best way to deal with fetching data
in a React web application and I'd love to hear about what else is out there.