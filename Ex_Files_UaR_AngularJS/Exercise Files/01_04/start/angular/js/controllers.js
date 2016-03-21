var myApp = angular.module('myApp', []);

myApp.controller("MyController", function MyController($scope) {

	// create a model manually and place it in the scope variable

	// anything placed in the scope variable will be available inside the contoller in the template

	$scope.author = {
		'name' 	: 'PJ',
		'title'	: 'web guru in training',
		'company': 'mediaslug.com'
	}

});