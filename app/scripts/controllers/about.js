'use strict';

/**
 * @ngdoc function
 * @name angularAndReactApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularAndReactApp
 */
angular.module('angularAndReactApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
