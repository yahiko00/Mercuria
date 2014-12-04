/// <reference path='../mercuria.ts' />
/// <reference path='subscribers.ts' />
var value = 0;
function increase() {
    value++;
    valueChanged.notify(1);
}
window.onload = function () {
    increase();
};
//# sourceMappingURL=publisher.js.map