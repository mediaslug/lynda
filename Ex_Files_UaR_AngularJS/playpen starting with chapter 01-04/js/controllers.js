var artistControllers = angular.module('myApp', []);

artistControllers.controller("ListController", ['$scope', '$http', function ($scope, $http) {

	// create a model manually and place it in the scope variable

	// anything placed in the scope variable will be available inside the contoller in the template
	$http.get('js/data.json').success(function(data){
		$scope.artists = data;
		$scope.artistOrder = 'name';
	});
}]);
