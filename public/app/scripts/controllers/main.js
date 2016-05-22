'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the publicApp
 */


angular.module('publicApp')
.controller('MainCtrl', [ 'CodeBuddiesGlobalStatus', function(CodeBuddiesGlobalStatus) { 

  if (!window.firebase || !(firebase.app instanceof Function) ) 
  {
    window.alert('Again: You have not configured and imported the Firebase SDK. ' +
      'Make sure you go through the codelab setup instructions.');
    return false ;
  }

}]) ;
