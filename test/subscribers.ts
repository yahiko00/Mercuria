/// <reference path='../mercuria.ts' />

function log(delta: number) {
  console.log('Value has changed by ' + delta.toString());
}

function display(delta: number) {
  alert('Value has changed by ' + delta.toString());
}

function nothing() {
}

var valueChanged = new MercuriaEvent();
valueChanged.addSubscriber((...args) => { log(args[0]); });
valueChanged.addSubscriber((...args) => { display(args[0]); });
valueChanged.addSubscriber(() => { nothing(); });
 