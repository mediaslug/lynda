var myApp = angular.module('myApp', ['ngRoute', 'firebase'])
.constant('FIREBASE_URL', 'https://lynda-registration.firebaseIO.com/');

myApp.run(['$rootScope', '$location',
    function($rootScope, $location){
        // trap an event when there is an error
        $rootScope.$on('$routeChangeError',
            function(event, next, previous, error){
                if(error=='AUTH_REQUIRED') {
                    $rootScope.message="sorry you must login";
                } // if auth_required error
            
        }); // event info
    }]); // run

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/login', {
		templateUrl: 'views/login.html',
		controller: 'RegistrationController'
	}).
	when ('/register', {
		templateUrl: 'views/register.html',
		controller: 'RegistrationController'
	}).
	when('/success', {
		templateUrl: 'views/success.html',
		controller: 'SuccessController',
        resolve: {
            currentAuth: function(Authentication) {
                return Authentication.requireAuth();
            } // currentAuth
        }// resolve
	}).
	otherwise({
		redirectTo: '/login'
	});
}]);