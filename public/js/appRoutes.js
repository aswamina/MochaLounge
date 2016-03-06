angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .when('/Books', {
            templateUrl: 'views/books.html',
            controller: 'StoreController'
        })
        .when('/geeks', {
            templateUrl: 'views/geek.html',
            controller: 'GeekController'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);