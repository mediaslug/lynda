myApp.factory('Authentication',['$rootScope', '$firebaseAuth', 'FIREBASE_URL',
    function($rootScope, $firebaseAuth, FIREBASE_URL) {
        var ref = new Firebase(FIREBASE_URL);
		var auth = $firebaseAuth(ref);
        
        // return an object with our different functions 
        
        return {
            login: function(user) {
                $rootScope.message = "welcome " + $scope.user.email;
            }, // end login
            
            register: function(user) {
                auth.$createUser({
                    email: user.email,
                    password: user.password
                }).then(function(regUser) {
                    $scope.message = "Hi " + user.firstname;
                }).catch(function(error){
                    $rootScope.message = error.message;
		        }); // end createUser
            }// end register
        }

}]); // end factory





myApp.controller('RegistrationController', 
	['$scope', '$firebaseAuth','FIREBASE_URL', 
	function($scope, $firebaseAuth, FIREBASE_URL){

	//$scope.message = "welcome to the RegistrationController";
	$scope.login = function () {
		$scope.message = "welcome " + $scope.user.email;
	}; // end login

	$scope.register = function() {
		auth.$createUser({
			email: $scope.user.email,
			password: $scope.user.password
		}).then(function(regUser) {
			$scope.message = "Hi " + $scope.user.firstname;
		}).catch(function(error){
			$scope.message = error.message;
		}); // end createUser

	}; // end register

}]); // end controller