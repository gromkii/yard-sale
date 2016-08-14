(function(){
  angular
    .module('Items', [])
    .factory('Items', Items)

  Items.$inject = ['$http']

  function Items($http){
    var ItemMethods = {
      getListings:getListings
    };

    return ItemMethods;

    function getListings(){
      return $http({
        url:'/api/v1/listings',
        method:'GET'
      });
    }
  }
})()
