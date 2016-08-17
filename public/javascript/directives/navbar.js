(function(){
  angular
    .module('navbar',['Authorization'])
    .directive('navbarDirective', navbarDirective)
    .controller('NavbarController', NavbarController)

  NavbarController.$inject = ['Authorization']

  function navbarDirective(){
    var obj = {
      restrict:'EA',
      templateUrl:'views/partials/navbar.html',
      controller:NavbarController,
      controllerAs:'navbar'
    }

    return obj;
  }

  function NavbarController(){
    var methods = {
      login: login
    }
  }

  function login(){
    var store = this;
  }




})()
