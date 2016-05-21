'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('LoginCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBRPOs06X27vl_k0yPynL-8QXzQvoUds9o",
      authDomain: "codebuddiesapp.firebaseapp.com",
      databaseURL: "https://codebuddiesapp.firebaseio.com",
      storageBucket: "codebuddiesapp.appspot.com",
    };

    // FirebaseUI config.
    var uiConfig = {
      'signInSuccessUrl': 'https://www.yahoo.com',
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
    var app = firebase.initializeApp(config);
    var auth = app.auth();
    var ui = new firebaseui.auth.AuthUI(auth);

    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);

  });
