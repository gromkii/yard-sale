(function(){
  angular
    .module('navbar',[])
    .directive('navbarDirective', navbarDirective)

  function navbarDirective(){
    var obj = {
      restrict:'EA',
      templateUrl:'views/partials/navbar.html'
    }

    return obj;
  }
})()
