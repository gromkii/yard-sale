(function(){
  angular
    .module('auth', [])
    .factory('Authorization', Authorization)

  function Authorization(){
    var authMethods = {
      login:login,
      sessionMake:sessionMake,
      logout:logout
    };

    function login(){

    }

    function sessionMake(session_id, user_id, admin){
      this.session_id = session_id;
      this.user_id = user_id;
      this.admin = admin;
    }

    function logout(){
      this.session_id = null;
      this.user_id = null;
      this.admin = null;
    }

    return AuthMethods;
  }
})()
