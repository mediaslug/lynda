var myApp = angular.module("myApp", []);

myApp.controller('RegistrationController', ['$scope', 
	function($scope) {
		$scope.register = function() {
			alert();
			$scope.message = 'Welcome' + $scope.user.firstname
		}
}]);