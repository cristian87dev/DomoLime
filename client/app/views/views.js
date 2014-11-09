domoApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home.html',
        controller: 'homeController'
      })
      .when('/ambients', {
        templateUrl: 'app/views/ambients.html',
        controller: 'ambientsController'
      })
      .when('/sensors', {
        templateUrl: 'app/views/sensors.html',
        controller: 'sensorsController'
      });
});