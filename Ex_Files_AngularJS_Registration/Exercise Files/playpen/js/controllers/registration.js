myApp.controller('RegistrationController', 
	['$scope', '$firebaseAuth','FIREBASE_URL', 
	function($scope, $firebaseAuth, FIREBASE_URL){
		var ref = new Firebase(FIREBASE_URL);
		var auth = $firebaseAuth(ref);

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