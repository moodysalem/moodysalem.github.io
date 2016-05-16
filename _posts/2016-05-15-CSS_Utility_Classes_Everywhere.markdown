---
layout: post
title:  "CSS Utility Classes Everywhere"
date:   2016-05-15 20:00
categories: css style react components
---
Recently I've given a lot of thought on how to best style React components
for our web projects at FastModel Sports. The main goals being high 
maintainability and ease of use.

## Lots of Options
Unlike in the past, there are now several contenders for styling React components. 
One of the proposed benefits of React is for other developers to go into your
components for the first time and start working immediately. The reason
it's so easy to work on a component you've never seen is because all 
the information you need to understand the component is within the component file.
It simply takes state and props and renders some HTML. 

While React components now contain semantic markup, they lack the visual design 
information which means you have to go elsewhere in your project to understand 
how a component will look when rendered. I'd argue that layer of separation 
is unnecessary in the same way that the separation between markup and logic 
is unnecessary. 

## Traditional method
The traditional styling method is to use classes for each of your components.
Give the components a long enough name and hopefully the fact that they are globally
scoped won't cause you trouble. You can use SASS or LESS and get all the 
benefits of being able to use logical constructs in your CSS code. However
you end up repeating yourself very often, and you still have to go back and 
forth between stylesheets and JSX files to understand a component.

## Inline Styles
Originally I thought inline styles solved this problem, but inline styles 
are still far from production ready. There are a number of issues including 
especially the inability to perfectly prefix all inline styles 
(some prefixes go to the CSS value while others go to the CSS attribute,
which means any JS solution has to know about the user agent.)

In addition, using only inline styles means you can't do simple things like
change color on hover without writing a bunch of additional code to detect
when the mouse is hovering. Theming also requires additional JS code
when you could just overwrite the CSS that comes with a component.

## Utility classes
The best of both worlds is the CSS utility class. 
One quick look at a utility class (e.g. border-bottom-primary-color) and 
you know exactly what it does without going to another file. You get all
the benefits of using CSS while making your React components easy to understand.

You can use a library like [classnames](https://github.com/JedWatson/classnames) 
to quickly construct long class names from props and state in your React 
component, and that code is dead simple to understand.

You also rarely need to change the stylesheets on your page once you've built
a good set of utility classes, and you can share those classes across components. 
I'd suggest you create one utility CSS stylesheet and share it between all 
your apps, and then create app specific stylesheets for overriding colors.
That's just one more thing that your developers don't need to learn about
when switching between apps.


## Conclusion
Today, using inline styles just creates too much work for the developer.
My recommendation is to continue using CSS, but simplify your stylesheets
to contain very specific (and specifically named) CSS classes with 1 style 
each.


## Example
I created [flexboxy](https://moodysalem.com/flexboxy/interactive), a set of
utility classes for flexbox, using nothing but CSS utility classes to become
familiar with the process. While writing the HTML direct using CSS classes 
is a huge pain, it was dead simple to work with in a React component. Check it out!