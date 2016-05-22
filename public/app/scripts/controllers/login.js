'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
.controller('LoginCtrl', [ 'CodeBuddiesGlobalStatus', function( CodeBuddiesGlobalStatus ) 
{

 // FirebaseUI config.
 var uiConfig = {
   'signInSuccessUrl': '#/chat',
   'signInOptions': [
     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
  //   firebase.auth.EmailAuthProvider.PROVIDER_ID
   ],
   // Terms of service url.
   'tosUrl': 'http://www.yahoo.com',
 };

 // Initialize the FirebaseUI Widget using Firebase.
 var auth = CodeBuddiesGlobalStatus.firebaseApp.get().auth() ;
 var ui = new firebaseui.auth.AuthUI( auth );

 // The start method will wait until the DOM is loaded.
 ui.start('#firebaseui-auth-container', uiConfig);


// this.userPic = document.getElementById('user-pic');
// this.userName = document.getElementById('user-name');
// this.signInButton = document.getElementById('sign-in');
// this.signOutButton = document.getElementById('sign-out');

}]);
