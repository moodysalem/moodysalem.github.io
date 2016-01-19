---
layout: post
title:  "Google is Killing the Native App"
date:   2016-01-18 18:40
categories: serviceworkers google chrome ios safari
---
[ServiceWorkers](https://www.w3.org/TR/service-workers/) are a relatively recent browser feature spearheaded by Google and Samsung 
that are going to change how web developers build products.
Using ServiceWorkers today, you can already build an offline web app that is indistinguishable from a native app
when added to the home screen of an Android device.
For example, check out (Trained to Thrill)[https://github.com/jakearchibald/trained-to-thrill] by [Jake Archibald](https://jakearchibald.com).
It seems pretty clear that the web is becoming the new JVM-it's what [Java Web Start](http://docs.oracle.com/javase/tutorial/deployment/webstart/) 
could have been with its automatic updating and hidden installer.

Below are some other features that the web platform previously did not have that are quickly becoming a reality. You can use many of
these features today to enhance your existing webapps-for example I've recently used ServiceWorkers to cache API data in a work
project to prevent duplicate network requests for the same data without increasing the complexity of my webapp.



- [x] Separate Window [Chrome Plugins](https://chrome.google.com/webstore/category/apps) and
    [iOS](https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)
    /
    [Android](https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android?hl=en)
    Web Apps
- [x] Reading a File from the File System [File API](https://www.w3.org/TR/FileAPI/)
- [x] Client Side Data Stores [IndexedDB](https://www.w3.org/TR/IndexedDB/)
- [x] Drag and Drop from other Windows [HTML5 Dratg and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [x] Full Screen API [Full Screen API](https://fullscreen.spec.whatwg.org/)
- [x] Touch Events [Touch Events](http://www.w3.org/TR/websockets/)
- [x] Persistent communication links [WebSockets](http://www.w3.org/TR/websockets/)
