/// <reference path='../mercuria.ts' />
/// <reference path='subscribers.ts' />

var value: number = 0;
declare var valueChanged: MercuriaEvent;

function increase() {
  value++;
  valueChanged.notify(1);
}

window.onload = () => {
  increase();
}