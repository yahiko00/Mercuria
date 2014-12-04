Mercuria
========

Mercuria is a small framework providing the [publish/subscribe](http://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) pattern (aka observer pattern).
This is implemented through a single class called `MercuriaEvent` which instances are exchanged between publishers and subscribers.

Usage note:
-----------
1. The publisher has to notify an event when needed.
2. The subscribers have to subscribe to events.
3. The publisher and the subscribers can be functions or methods.

Example:
--------

### subscribers.ts

```javascript
function log(delta: number) {
  console.log('Value has changed by ' + delta.toString());
}

function display(delta: number) {
  alert('Value has changed by ' + delta.toString());
}

function nothing() {
}

var valueChanged = new MercuriaEvent();
valueChanged.addSubscriber( (...args) => { log(args[0]);     } );
valueChanged.addSubscriber( (...args) => { display(args[0]); } );
valueChanged.addSubscriber( ()        => { nothing();        } );
```


### publisher.ts

```javascript
var value: number = 0;
declare var valueChanged: MercuriaEvent;

function increase() {
  value++;
  valueChanged.notify(1);
}

window.onload = () {
  increase();
}
```

