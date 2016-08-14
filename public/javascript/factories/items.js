(function(){
  angular
    .module('Items', [])
    .factory('Items', Items)

  Items.$inject = [];

  function Items(){
    $http({
      method:'GET',
      url:'/api/v1/listings'
    }).then( results => {
      return results;
    });
  }
})()
