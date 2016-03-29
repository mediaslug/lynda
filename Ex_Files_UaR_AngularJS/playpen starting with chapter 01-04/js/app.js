var myApp = angular.module('myApp', [
	// i think these are dependencies.
	'ngRoute', // specify the routing. 
	'artistControllers' // specify the javascript that will handle this module
]);

// configure routeProvider service
myApp.config(['$routeProvider', function($routeProvider) {
	// what's going to happen when someone gets to a specific partial
	$routeProvider.when('/list', {
		templateUrl: 'partials/list.html',
		controller: 'ListController'
	}).

	when('/details/:itemId', {
		templateUrl: 'partials/details.html',
		controller: 'DetailsController'
	}).
	otherwise({
		redirectTo: '/list'
	});
}]);