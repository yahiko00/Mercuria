/// <reference path='../mercuria.ts' />

var value: number = 0;
var valueChanged = new MercuriaEvent();

function increase() {
  value++;
  valueChanged.notify(1);
}

window.onload = () => {
  increase();
}