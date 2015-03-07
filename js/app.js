/**
 * Created by brianbest on 15-03-07.
 */

var app = angular.module('essayApp', ['ngRoute']);
app.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
            when('/', {
                templateUrl: 'views/main-page.html',
                controller: 'mainCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
}]);