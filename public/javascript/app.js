(function(){
  angular
    .module('yardSale', ['ng-route','indexController'])
    .config(routeConfig)

  routeConfig.$inject = ['$routeProvider','$locationProvider'];

  function routeConfig($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl:'/public/views/index.html',
        controller:'IndexController',
        controllerAs:'index'
      });

    $locationProvider.html5Mode({
      enabled:true,
      requireBase:false
    })
  }
})();
