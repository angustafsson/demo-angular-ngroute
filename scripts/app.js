 angular.module('angularNgRouteDemo', ['ngRoute'])
 .config(function($routeProvider){
 	
 	$routeProvider.when('/',{
 		templateUrl: 'app/home/index.html',
 		controller: 'HomeController'
 	}).when('/secondpage',{
 		templateUrl: 'app/SecondPage/index.html',
 		controller: 'SecondPageController'
 	}).when('/thirdpage',{
 		templateUrl: 'app/ThirdPage/index.html',
 		controller: 'ThirdPageController'
 	});

	$routeProvider.otherwise('/');
 });