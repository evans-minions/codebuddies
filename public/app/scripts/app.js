'use strict';

/**
 * @ngdoc overview
 * @name publicApp
 * @description
 * # publicApp
 *
 * Main module of the application.
 */

var codeBuddiesApp = angular                  
                       .module('publicApp', [
                         'ngAnimate',
                         'ngCookies',
                         'ngResource',
                         'ngRoute',
                         'ngSanitize',
                         'ngTouch'
                       ]) ;

codeBuddiesApp.factory( 'CodeBuddiesGlobalStatus', [function() 
{
  var o =
  {
    // Firebase App Config
    config:
    {
      apiKey:        "AIzaSyA5MEhTD1k1VAj0eRbsFaCa8R_RPxpKa84",
      authDomain:    "codebuddiesapp-miko.firebaseapp.com",
      databaseURL:   "https://codebuddiesapp-miko.firebaseio.com",
      storageBucket: "codebuddiesapp-miko.appspot.com",
    },
    
    isLoggedIn: false,
    onAuthChanged: null 
  }

  o.firebaseApp = (function()
  {
    var appInstance;

    return {
      get:  function() {
        if (!appInstance)
        {
          appInstance = firebase.initializeApp(o.config) ;
        }
        
        return appInstance ;
      }
    } ;
  })() ;
 
  o.onAuthStateChanged = (function( user )
  {
    var this_o = o ;

    if ( user )
    {
      console.log('logged in: ' + user.displayName) ;
      this_o.isLoggedIn = user ;
    }
    else
    {
      console.log('logged out!' ) ;  
      this_o.isLoggedIn = null ;
    }
  }) ;

  o.firebaseApp.get().auth().onAuthStateChanged( o.onAuthStateChanged ) ;

  //window.CodeBuddiesGlobalStatus = o ;
  return o ;
}]) ;


codeBuddiesApp.run([ '$rootScope', '$timeout', '$location', 'CodeBuddiesGlobalStatus', '$templateCache',
function($rootScope, $timeout, $location, CodeBuddiesGlobalStatus, $templateCache ) {
  $rootScope.$on('$viewContentLoaded', () => {
    $timeout(() => {
      componentHandler.upgradeAllRegistered();
    })
  })

  $templateCache.removeAll() ;
  // redirect to login if user is not logged in yet
  $rootScope.$on( "$routeChangeStart", function(event, next, current) {
    
    // no logged user, we should be going to #login
    if ( !CodeBuddiesGlobalStatus.isLoggedIn ) 
    {
      if ( next.templateUrl != "views/login.html" ) 
      {
        $location.path( "/login" );
      }
    }
    // a user is already logged in, no need to go there 
    else
    {
      if ( next.templateUrl == "views/login.html" ) 
      {
        $location.path( "/chat" );
      }
    }
  });

}]) ;

codeBuddiesApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })
    .when('/chat', {
      templateUrl: 'views/chat.html',
      controller: 'ChatCtrl',
      controllerAs: 'chat'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

