/********************************************************
 * Event exchanged between publishers and subscribers.
 * This is based on Model-View-Controller Design Pattern.
 *
 * Usage note:
 * -----------
 * 1. The event should NOT be instanciated by its publisher.
 * 2. The publisher has to notify an event when needed.
 * 3. The subscribers have to subscribe to events.
 * 4. The publisher and the subscribers can be functions or methods.
 *
 * Exemple:
 * --------
 *
 * [ *** subscribers.ts *** ]
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
 *
 * [ *** publisher.ts *** ]
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
