import clickEventListener from './Business/ClickEvent';

class EventObserver {

    observers: Array<any>

    constructor() {
        this.observers = []
    }

    subscribe(fn) {
        this.observers.push(fn)
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(subscriber => subscriber !== fn)
    }

    broadcast(data) {
        this.observers.forEach(subscriber => subscriber(data))
    }
}

const observer = new EventObserver()

observer.subscribe(clickEventListener());