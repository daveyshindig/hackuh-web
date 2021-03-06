'use strict';

var App = angular.module('hackuhWebApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        reloadOnSearch : false
      })
      .when('/faq', {
        templateUrl: 'views/faq.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

App.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.hashPrefix('#');
  $locationProvider.html5Mode(true); //now there won't be a hashbang within URLs for browers that support HTML5 history
}]);
