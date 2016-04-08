myApp.controller('RegistrationController', 
	['$scope', 'Authentication', 
	function($scope, Authentication){
		
	$scope.login = function () {
        Authentication.login($scope.user);
    }; // end login

	$scope.register = function() {
        Authentication.register($scope.user);
	}; // end register

}]); // end controller