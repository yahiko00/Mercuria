/********************************************************
 * Mercuria is a small framework providing the
 * publish/subscribe pattern (aka observer pattern).
 * This is implemented through a single class called
 * MercuriaEvent which instances are exchanged between
 * publishers and subscribers.
 *
 * Usage note:
 * -----------
 * 1. The event should NOT be instanciated by its publisher.
 * 2. The publisher has to notify an event when needed.
 * 3. The subscribers have to subscribe to events.
 * 4. The publisher and the subscribers can be functions or methods.
 *
 * Example:
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
class MercuriaEvent {
  protected subscribers: { (...args: any[]): void }[] = []; // { (args?: Object): void } stands for (args?: Object) => void

  /**
   * Add a subscriber
   * @param subscriber Function called when a notification occurs.
   *********************************************************/
  public addSubscriber(subscriber: (...args: any[]) => void) {
    this.subscribers.push(subscriber);
  } // subscribe

  /**
   * Notify subscribers
   * @param args Additional parameters of the notification.
   *********************************************************/
  public notify(...args: any[]) {
    for (var i = 0; i < this.subscribers.length; i++) {
      this.subscribers[i](args);
    } // for i
  } // notify
} // MercuriaEvent
