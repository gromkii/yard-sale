(function(){
  angular
    .module('indexController', [])
    .controller('IndexController', IndexController)

  IndexController.$inject = [];

  function IndexController(){
    var store = this;

    store.greeting = 'Hello';
  }
})();
