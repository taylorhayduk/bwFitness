require("angular");
require("angular-ui-router");
require("./style.css");
// document.write(require("./content.js"));


//////////////////////////////////////////
// REFERENCE: UI Solar System ////////////
//////////////////////////////////////////
angular.module('app', ['ui.router'])
.config(function($stateProvider) {
  // An array of state definitions
  var componentNames = [
    'hello',
    'about',
    'start',
    'stretches'
  ]

  var states = [];
  (function(){
    componentNames.forEach(function(name){
      states.push({
        name: name,
        url: '/' + name,
        template: '<' + name + '></' + name + '>'
      })
    })
  })();

  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});


require("./components/start/start.js");
require("./components/01-stretches/start.js");

angular.module('app').component('hello', {
  template:  '<h3>{{$ctrl.greeting}} solar sytem!</h3>' +
             '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',

  controller: function() {
    this.greeting = 'hello';

    this.toggleGreeting = function() {
      this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
    }
  }
})

angular.module('app').component('about', {
  template:  '<h3>Its the UI-Router<br>Hello Solar System app!</h3>'
})




//////////////////////////////////////////
// REFERENCE: UI Router Hello World///////
//////////////////////////////////////////

// var myApp = angular.module('helloworld', ['ui.router'])
// .config(function($stateProvider) {
//   var helloState = {
//     name: 'hello',
//     url: '/hello',
//     template: '<h3>hello world!</h3>'
//   }
//
//   var aboutState = {
//     name: 'about',
//     url: '/about',
//     template: '<h3>Its the UI-Router hello world app!</h3>'
//   }
//
//   $stateProvider.state(helloState);
//   $stateProvider.state(aboutState);
// });

////////////////////////////////
// REFERENCE: Currency Converter
////////////////////////////////

// Taylor: Use this for reference
// .controller('InvoiceController', function InvoiceController() {
//   this.qty = 1;
//   this.cost = 2;
//   this.inCurr = 'EUR';
//   this.currencies = ['USD', 'EUR', 'CNY'];
//   this.usdToForeignRates = {
//     USD: 1,
//     EUR: 0.74,
//     CNY: 6.09
//   };
//
//   this.total = function total(outCurr) {
//     return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
//   };
//   this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
//     return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
//   };
//   this.pay = function pay() {
//     window.alert('Thanks!');
//   };
// })
