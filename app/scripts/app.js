 (function() {
     function config($stateProvider, $locationProvider) {
     	$locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });

         $stateProvider
             .state('landing', {
                 url: '/',
                 controller: 'LandingCtrl as landing',
                 templateUrl: '/templates/landing.html'
             });
         $stateProvider
             .state('complete', {
                 url: '/complete',
                 controller: 'CompleteCtrl as complete',
                 templateUrl: '/templates/complete.html'
             });
     }
 
     angular
         .module('blocitoff', ['ui.router', 'firebase'])
         .config(config);
 })();