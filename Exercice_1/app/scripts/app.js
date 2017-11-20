'use strict';

/**
 * @ngdoc overview
 * @name exercice1App
 * @description
 * # exercice1App
 *
 * Main module of the application.
 */
angular
  .module('exercice1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
