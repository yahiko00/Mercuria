/********************************************************
 * Mercuria is a small framework written in TypeScript
 * and available also in JavaScript providing the
 * publish/subscribe pattern (aka observer pattern).
 * This is implemented through a single class called
 * MercuriaEvent which instances are exchanged between
 * publishers and subscribers.
 *
 * Usage note:
 * -----------
 * 1. The publisher has to notify an event when needed.
 * 2. The subscribers have to subscribe to events.
 * 3. The publisher and the subscribers can be functions or methods.
 *
 * Example:
 * --------
 *
 * ### publisher.ts
 *
 * var value: number = 0;
 * declare var valueChanged: MercuriaEvent;
 *
 * function increase() {
 *   value++;
 *   valueChanged.notify(1);
 * }
 *
 * window.onload = () {
 *   increase();
 * }
 *
 *
 * ### subscribers.ts
 *
 * function log(delta: number) {
 *   console.log('Value has changed by ' + delta.toString());
 * }
 *
 * function display(delta: number) {
 *   alert('Value has changed by ' + delta.toString());
 * }
 *
 * function nothing() {
 * }
 *
 * var valueChanged = new MercuriaEvent();
 * valueChanged.addSubscriber( (...args) => { log(args[0]);     } );
 * valueChanged.addSubscriber( (...args) => { display(args[0]); } );
 * valueChanged.addSubscriber( ()        => { nothing();        } );
 *
 *********************************************************/
var MercuriaEvent = (function () {
    function MercuriaEvent() {
        this.subscribers = []; // { (args?: Object): void } stands for (args?: Object) => void
    }
    /**
     * Add a subscriber
     * @param subscriber Function called when a notification occurs.
     *********************************************************/
    MercuriaEvent.prototype.addSubscriber = function (subscriber) {
        this.subscribers.push(subscriber);
    }; // subscribe
    /**
     * Notify subscribers
     * @param args Additional parameters of the notification.
     *********************************************************/
    MercuriaEvent.prototype.notify = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        for (var i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i](args);
        }
    }; // notify
    return MercuriaEvent;
})(); // MercuriaEvent
//# sourceMappingURL=mercuria.js.map