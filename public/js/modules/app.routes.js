'use strict';

angular
    .module('app.routes', ['ngRoute'])
    .config(config);

function config($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');

	$routeProvider.when('/list', {
		templateUrl: 'partials/list.html',
		controller: 'MainController'
	});

	$routeProvider.when('/addnew', {
		templateUrl: 'partials/add-new.html',
		controller: 'MainController'
	});

	$routeProvider.when('/editcard', {
		templateUrl: 'partials/edit-card.html',
		controller: 'MainController'
	});

	$routeProvider.otherwise({
		redirectTo: '/list'
	});
}