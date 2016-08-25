angular.module('app')

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
        'use strict';

        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('homepage', {
            url: '/',
            templateUrl: 'app/components/homepage/homepage.html',
            controller: 'HomepageCtrl'
        });

        $stateProvider.state('postcode', {
            url: '/postcode',
            templateUrl: 'app/components/postcode/postcode.html'
        });


        // Todo : Create Directive; test Dataservices; Be Prepared to deploy;
    }]);
