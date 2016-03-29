var artistControllers = angular.module('artistControllers', ['ngAnimate']);

artistControllers.controller("ListController", ['$scope', '$http', function ($scope, $http) {

	// create a model manually and place it in the scope variable

	// anything placed in the scope variable will be available inside the contoller in the template
	$http.get('js/data.json').success(function(data){
		$scope.artists = data;
		$scope.artistOrder = 'name';
	});
}]);

// this controller will also receive the $routeParams service
artistControllers.controller("DetailsController", ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

	// create a model manually and place it in the scope variable

	// anything placed in the scope variable will be available inside the contoller in the template
	$http.get('js/data.json').success(function(data){
		$scope.artists = data;
		$scope.whichItem = $routeParams.itemId;


		if ($routeParams.itemId > 0) { // if this is greater than the first item
			$scope.prevItem = Number($routeParams.itemId)-1; // previous item is this item - 1
		} else {
			$scope.prevItem = $scope.artists.length-1 // else we're on first item and previous item is last item. 
		}

		if ($routeParams.itemId < $scope.artists.length-1) { // if this is less than the last item
			$scope.nextItem = Number($routeParams.itemId)+1; // next item is this item + 1
		} else {
			$scope.nextItem = 0 // else we're on last item and next item is first item. 
		}


	});
}]);
