var pub_sub = {
  subscribers : {},
  subscribe: function(eventName, fn) {
    this.subscribers[eventName] = this.subscribers[eventName] || [];
    this.subscribers[eventName].push(fn);
  },
  unsubscribe: function(eventName, fn) {
    if(this.subscribers[eventName]) {
      var index = this.subscribers[eventName].indexOf(fn);
      this.subscribers[eventName].splice(index, 1);
    }
  },
  fire: function(eventName,data) {
    if(this.subscribers[eventName]) {
      this.subscribers[eventName].forEach(function(fn) {
        fn(data);
      });
    }
  }
};
export default pub_sub;