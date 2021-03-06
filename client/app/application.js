angular.module('app', [
        'ui.bootstrap',
        'ui.router'
    ])

    .run(['$rootScope', '$state', function ($rootScope, $state) {
        'use strict';

        // this is available from all across the app
        $rootScope.appName = 'Interactive Investor';

        // make $state available from templates
        $rootScope.$state = $state;
    }]);
