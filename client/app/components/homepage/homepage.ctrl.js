angular.module('app')
    .controller('HomepageCtrl', ['$scope', 'homepageService', function ($scope, homepageService) {
        // here we define the items to be repeated in the template

        var self = this;


        $scope.list1 = [
            {label: 'one'},
            {label: 'two'},
            {label: 'three'}
        ];

        $scope.list2 = [
            {label: 'uno'},
            {label: 'dos'},
            {label: 'tres'}
        ];
    }]);
