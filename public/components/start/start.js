var template = require("./start.html")

angular.module('app').component('start', {
  template: template,

  controller: function() {
    this.greeting = 'hello';

    this.toggleGreeting = function() {
      this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
    }
  }
})
