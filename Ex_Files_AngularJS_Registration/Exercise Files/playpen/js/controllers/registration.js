myApp.controller('RegistrationController', 
	['$scope', 'Authentication', 
	function($scope, Authentication){
		
	$scope.login = function () {
        Authentication.login($scope.user);
    }; // end login
        
    $scope.logout = function () {
        Authentication.logout();
    }; // logout

	$scope.register = function() {
        Authentication.register($scope.user);
	}; // end register

}]); // end controller