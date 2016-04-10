myApp.factory('Authentication',['$rootScope', '$firebaseAuth', '$firebaseObject', '$location', 'FIREBASE_URL',
    function($rootScope, $firebaseAuth, $firebaseObject, $location, FIREBASE_URL) {
        var ref = new Firebase(FIREBASE_URL);
		var auth = $firebaseAuth(ref);
        
        // once the user has authenticated
        
        auth.$onAuth(function(authUser) {
          if(authUser) {
              var userRef = new Firebase(FIREBASE_URL + 'users/' + authUser.uid);
              var userObj = new $firebaseObject(userRef);
              $rootScope.currentUser = userObj;
              alert("got a current user");
          } else {
              $rootScope.currentUser='';
              alert("don't got a current user");
          }
        });
        
        // create an object with our different functions 
        var registrationObj =  {
            login: function(user) {
               auth.$authWithPassword({
                   email: user.email,
                   password: user.password
               }).then(function(regUser){
                   $location.path('/success');
               }).catch(function(error){
                    $rootScope.message = "ERROR: " + error.message;
               }) 
            }, // end login
            
            logout: function() {
                return auth.$unauth();
            }, // end logout
            
            requireAuth: function() {
                return auth.$requireAuth(); 
            }, // requireAuth
            
            register: function(user) {
                auth.$createUser({
                    email: user.email,
                    password: user.password
                }).then(function(regUser) {
                    var regRef = new Firebase(FIREBASE_URL+ 'users')
                    .child(regUser.uid).set({
                        date:Firebase.ServerValue.TIMESTAMP,
                        regUser: regUser.uid,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        email: user.email
                    }); //user info
                    
                    registrationObj.login(user);
                }).catch(function (error) {
                    $rootScope.message = "ERROR: " + error.message;
		        }); // end createUser
            }// end register
        }
        return registrationObj;

}]); // end factory
