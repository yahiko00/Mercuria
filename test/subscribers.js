/// <reference path='../mercuria.ts' />
/// <reference path='publisher.ts' />
function log(delta) {
    console.log('Value has changed by ' + delta.toString());
}
function display(delta) {
    alert('Value has changed by ' + delta.toString());
}
function nothing() {
}
valueChanged.addSubscriber(function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    log(args[0]);
});
valueChanged.addSubscriber(function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    display(args[0]);
});
valueChanged.addSubscriber(function () {
    nothing();
});
//# sourceMappingURL=subscribers.js.map