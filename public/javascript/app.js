(function(){
  angular
    .module('yardSale', ['ngRoute','indexController'])
    .config(router)

  router.$inject = ['$routeProvider', '$locationProvider'];

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
})();
