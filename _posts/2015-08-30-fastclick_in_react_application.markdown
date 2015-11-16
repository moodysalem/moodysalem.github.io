---
layout: post
title:  "Fixing 300ms click delay in React Application"
date:   2015-08-30 15:20
categories: react fastclick ios safari
---

tl;dr: [The Code](https://raw.githubusercontent.com/moodysalem/react-backstrap/master/src/main/resources/META-INF/resources/rbs/components/controls/Tappable.js)

Resolving the 300ms click delay with React. A [Google Search](https://www.google.com/search?q=click+delay) gives a huge number of solutions to this problem, including [FastClick](https://github.com/ftlabs/fastclick) which is in use on this page, but I couldn't find one that worked well with my existing React components. FastClick also has unresolved issues with new HTML5 input types. I rolled my own React component in [react-backstrap](https://github.com/moodysalem/react-backstrap) with a small amount of code.


## Available Properties

`threshold` indicates how far in px the touch may move before it is no longer considered a 'tap', and the `timeThreshold` indicates how long the finger may be down. Since mobile browsers will still emulate click events if the finger is down for a significant amount of time but does not move, timeThreshold defaults to null.

    propTypes: {
      // the number of px that the finger can move before the touch should no longer trigger the click event at touch end
      threshold: React.PropTypes.number,
      timeThreshold: React.PropTypes.number
    },

## State Variables

`touchId` represents the `identifier` of the touch that is being tracked as potentially a 'tap'. The other state variables are copied out of the touch when the touch starts.


    getInitialState: function () {
      return {
        touchId: null,
        touchX: null,
        touchY: null,
        touchTime: null
      };
    },


## Touch Starts

For multi-touch, we completely bail on any operations. Otherwise we copy the target touch into our state variables.

	handleTouchStart: function (e) {
	  // one+ touches means the user isn't trying to tap this element
	  if (e.touches.length !== 1 || e.targetTouches.length !== 1) {
	    this.clearTouchData();
	    return;
	  }
	  var tch = e.targetTouches[ 0 ];
	  this.setState({
	    touchId: tch.identifier,
	    touchX: tch.screenX,
	    touchY: tch.screenY,
	    touchTime: (new Date()).getTime()
	  });
	},

## Touch Moves

Here our only concern is that the touch has moved too far. In addition, if we somehow enter a multi-touch state, we should clear the touch data.

We calculate the touch distance and bail if it exceeds our threshold.

    handleTouchMove: function (e) {
      if (this.state.touchId === null) {
        return;
      }
      if (e.touches.length !== 1) {
        this.clearTouchData();
        return;
      }
      // find the touch from the changed touches (should be the only one)
      var tch = _.find(e.changedTouches, function (oneT) {
        return oneT.identifier === this.state.touchId;
      }, this);

      // this shouldn't ever happen
      if (!tch) {
        return;
      }
      // calculate how far it was moved
      var dist = Math.sqrt(Math.pow(tch.screenX - this.state.touchX, 2) + Math.pow(tch.screenY - this.state.touchY, 2));
      // if it was moved farther than the allowed amount, then we should cancel the touch
      if (dist > this.props.threshold) {
        this.clearTouchData();
      }
    },


## Touch Ends
If a touch completes and our touch data is not cleared, it's time to emulate the click. So we verify the tap wasn't held too long, verify again that it's not a multitouch event, and then trigger a click on the target. What this actually does depends on the target. Note the `e.preventDefault` which prevents the browser's own emulated click events from coming through.

    handleTouchEnd: function (e) {
      if (this.state.touchId === null) {
        return;
      }

      // by default, we don't care how long the press happened, only how much the finger has moved
      if (this.props.timeThreshold !== null) {
        // long press, don't do anything
        if (((new Date()).getTime() - this.state.touchTime > this.props.timeThreshold)) {
          this.clearTouchData();
          return;
        }
      }

      // still a touch remaining
      if (e.touches.length !== 0) {
        this.clearTouchData();
        return;
      }

      // get the touch from the list of changed touches
      var tch = _.find(e.changedTouches, function (oneTouch) {
        return oneTouch.identifier === this.state.touchId;
      }, this);

      if (!tch) {
        this.clearTouchData();
        return;
      }

      var target = tch.target;

      // prevent the simulated mouse events
      e.preventDefault();
      // clear the data and then trigger the click
      this.clearTouchData(function () {
        this.triggerClick(target);
      });
    },

## Trigger Click

Here we always emulate a click on the tapped element via plain JS. However for many mobile browsers, a triggered click does not focus an input. So we must manually focus the element if that behavior is expected.

    triggerClick: function (target) {
      var el = $(target);
      // always trigger a click
      target.click();
      // since click doesn't focus a
      if ((el.is("input") && !el.is("[type=checkbox]")) || el.is("textarea")) {
        target.focus();
      }
    },


## Render

This piece shows the great composability and flexibility of React components. You can easily build components that contain only behavior.

    render: function () {
      return React.cloneElement(React.Children.only(this.props.children), {
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd,
        onTouchMove: this.handleTouchMove,
        onTouchCancel: this.handleTouchCancel
      });
    }