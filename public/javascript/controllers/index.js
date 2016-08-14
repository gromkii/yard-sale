(function(){
  angular
    .module('indexController',[])
    .config(router)
    .controller('IndexController', IndexController)

  router.$inject = ['$routeProvider', '$locationProvider'];
  IndexController.$inject = ['Items'];

  function router($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl:'views/index/main.html',
        controller:'IndexController',
        controllerAs:'index'
      })

    $locationProvider.html5Mode({
      enabled:true,
      requireBase:false
    });
  }

  function IndexController(Items){
    var store = this;
    store.greeting = 'Testing.';

    Items.getListings().then(items => {
      console.log(items.data);
      store.items = items.data;
    })

  }
})()
