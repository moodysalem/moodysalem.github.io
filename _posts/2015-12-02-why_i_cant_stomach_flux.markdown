---
layout: post
title:  "Why I Can't Stomach Flux"
date:   2015-12-02 20:54
categories: react flux model mvc
---

Primarily today I use Backbone Models and Collections, but I've been considering making the switch to use a Flux implementation
like Redux. Here's why I haven't been convinced, in 10 minutes.

## Still Subscribing to Stores
Flux still hasn't resolved the imperative nature of fetching and interacting with data. You still have to subscribe to the store
to get updates in application state. This feels no different than instantiating a few models or collections and subscribing
to change events, and comes with the same problems-only the convention is to just have a single model (i.e. store)
in the case of flux.

I think the solution to this problem is managing data with something like [react-ajax](https://github.com/yuanyan/react-ajax)
that takes URLs and parameters (e.g. query parameters like pagination, sorting, and filtering)
and deals with fetching the data and passing the state of the fetching as properties to its child component.

## Significantly More Boilerplate
Flux stores do not give you the tools that come for free with Backbone models and collections to fetch and save data.
That means you're likely back to making Ajax calls again to interact with that RESTful service.

Backbone integration here feels redundant since you're otherwise just dealing with plain objects, and you won't want mutable
Backbone Models and Collections in your store.

## Pass Props `all the way down` or Use an Experimental Feature
[Redux](http://ract.org/redux) recommends that you use the experimental [React context](https://facebook.github.io/react/docs/context.html)
feature, which means your application is likely to be vulnerable to API changes in future versions of React.

Otherwise you're passing your store as a property all the way down your component tree, which feels inelegant. This is
often necessary for controls to dispatch events to the store.

I think this is just a symptom of the next issue...

## Sharing a Global Store
React solves a fundamental problem with web UIs, which is that dependencies between the view and data model are
difficult to manage as your web application becomes more complex. React does this by making your UI completely deterministic,
i.e. render should return the same DOM given the same properties and state.

But now that store is a component property (or context variable),
and store can have loads of state in it which will grow with the complexity of the application, it's not clear
how a component should render given its properties and state.

This also opens you up to the _arguable_ anti-pattern of passing store to lower level components because their rendering depends
on many pieces of application state, rather than passing props to the lower level component. Where do you draw the line
between a low level component that should only use properties and a top level component that reads from the store?
If you already have the store because you're dispatching actions to it, is it OK to pull values from the store in the render method
rather than add properties to the component?

For now it seems a lot more transparent to instantiate the required models and components in the initial state of the top
level component, and pass each model and collection to only the children components that require them, but I think Backbone
could be replaced by a well designed data store component that passes the appropriate callbacks for saving and deleting data.