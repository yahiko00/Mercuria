/// <reference path='../mercuria.ts' />
var value = 0;
var valueChanged = new MercuriaEvent();
function increase() {
    value++;
    valueChanged.notify(1);
}
window.onload = function () {
    increase();
};
//# sourceMappingURL=publisher.js.map