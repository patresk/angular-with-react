/**
 * @jsx React.DOM
 *
 */

'use strict';

/**
 * @ngdoc function
 * @name angularAndReactApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAndReactApp
 */
angular.module('angularAndReactApp')
  .controller('MainCtrl', function ($scope, $timeout, $interval) {
    
	var ROWS_COUNT = 500;
	var COLUMN_COUNT = 10; 

    var data = [ROWS_COUNT];

    for (var i = 0; i < ROWS_COUNT; i++) {
   		var row = [COLUMN_COUNT];
   		for (var j = 0; j < COLUMN_COUNT; j++) {
   			row[j] = 1;
   		}
   		data[i] = row;
    }

    $timeout(function() {
    	$scope.data = data;	
    });


    setInterval(function() {
    	// update random 20 items in array
    	for (var k = 0; k < 200; k++) {
    		var row = Math.floor(Math.random() * ROWS_COUNT);
    		var column = Math.floor(Math.random() * COLUMN_COUNT);
    		var value = Math.random() > 0.5 ? 1 : -1;
    		$scope.data[row][column] += value;
    	}
    	// Uncomment this to React way
    	component.setProps({list: $scope.data});
    },1000);

    var component = 
    	React.renderComponent(
  	  		DataComponent(),
	  		document.getElementById('list')
		);


  });