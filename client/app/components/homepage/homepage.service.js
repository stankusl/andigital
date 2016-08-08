(function () {

    angular.module('app').factory('homepageService', ['$http', '$q', homepageService]);

    function homepageService($http, $q) {

        return {
            // Retrieve Information
            getNearbyPlacesFromPosition: getNearbyPlacesFromPosition

        };


        function getNearbyPlacesFromPosition(lat, lon) {
            var deferred = $q.defer();

            $http({
                method: "GET",
                url: "https://api.foursquare.com/v2/venues/search?client_id=ORHFOHAN0JXJJYGFW3UCWKGIMHSNHRJAAOB5V0TF3N12FHPP&client_secret=ZB0H2GGGUE5KKVZAKVXBFUWCYCXB0ER40VKYYVDQGPMWSFIG&v=20130815&ll=53.350,-6.26&query=sushi",
            })
                .then(function (response) {
                    deferred.resolve(response.data);
                })
                .catch(function (response) {
                    $log.error('Error Sending Dependants data: ' + status);
                    return $q.reject('Error Sending Dependants data.');
                });
            return deferred.promise;

        };


    }

}());