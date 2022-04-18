(function(window) {
    function Events() {
        this.listeners = [];
        
    }
    Events.prototype = {
      attach(listener) {
          this.listeners.push(listener);

      },
      notify(args) {
        this.listeners.forEach((listener, index) => {
            this.listeners[index](args);
        });
      }
    };




    window.valerMVC = window.valerMVC || {};
    window.valerMVC.Events = Events;
})(window);