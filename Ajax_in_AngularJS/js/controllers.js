angular.module('listApp', [])
    .controller('ListController', ['$http', function($http) {
        $http.get("https://www.eventbriteapi.com/v3/events/search/?token=APIKEY&location.address=london+uk")
        .then(function(data) {
            console.log(data);
        })
    }])