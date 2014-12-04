/// <reference path='../mercuria.ts' />
/// <reference path='publisher.ts' />

function log(delta: number) {
  console.log('Value has changed by ' + delta.toString());
}

function display(delta: number) {
  alert('Value has changed by ' + delta.toString());
}

function nothing() {
}

declare var valueChanged: MercuriaEvent;
valueChanged.addSubscriber((...args) => { log(args[0]); });
valueChanged.addSubscriber((...args) => { display(args[0]); });
valueChanged.addSubscriber(() => { nothing(); });
