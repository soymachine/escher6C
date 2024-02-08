
class Eventos {
    constructor() {
      console.error("Constructor de Eventos")
      this.subscribers = new Map();
    }
  
    // Subscribe a callback function to an event
    subscribe(event, callback) {
      console.log("subscribe")
      if (!this.subscribers.has(event)) {
        this.subscribers.set(event, []);
      }
      this.subscribers.get(event).push(callback);
    }
  
    // Publish a message to all subscribers of an event
    publish(event, message) {
      if (this.subscribers.has(event)) {
        const subscribers = this.subscribers.get(event);
        console.log(subscribers)
        subscribers.forEach(callback => callback(message));
      }
    }
  
    // Example usage:
    // eventSystem.subscribe('userLoggedIn', (user) => {
    //   console.log(`User ${user} logged in.`);
    // });
    // eventSystem.publish('userLoggedIn', 'Alice');
}

const eventSystem = new Eventos();

export default eventSystem;