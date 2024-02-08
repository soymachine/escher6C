class EventSystem {
    constructor() {
      // Initialize an empty map to store event subscriptions
      this.subscribers = new Map();
    }
  
    // Subscribe a callback function to an event
    subscribe(event, callback) {
      if (!this.subscribers.has(event)) {
        this.subscribers.set(event, []);
      }
      this.subscribers.get(event).push(callback);
    }
  
    // Publish a message to all subscribers of an event
    publish(event, message) {
      if (this.subscribers.has(event)) {
        const subscribers = this.subscribers.get(event);
        subscribers.forEach(callback => callback(message));
      }
    }
  
    // Example usage:
    // eventSystem.subscribe('userLoggedIn', (user) => {
    //   console.log(`User ${user} logged in.`);
    // });
    // eventSystem.publish('userLoggedIn', 'Alice');
}
  
class Events {
}

Events.ON_ROUTINE_ADDED = "ON_ROUTINE_ADDED"
Events.ON_ROUTINE_REMOVED = "ON_ROUTINE_REMOVED"


const eventSystem = new EventSystem();
  
// Export the singleton instance
export {eventSystem, Events};