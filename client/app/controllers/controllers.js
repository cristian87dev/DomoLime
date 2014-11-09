domoApp
    .controller('homeController', ['$scope', '$location', function($scope, $location) { 
	    $scope.home = 'Hogar';
	    $scope.go = function (path) {
            $location.path(path);
        };
    }])
    .controller('navController', ['$scope', function($scope) {
        $scope.isVisible = true;
        
        $scope.toggleNav = function(){
            $scope.isVisible = !$scope.isVisible;
        };
    }])
    .controller('ambientsController', ['$scope', function($scope) {
        $scope.name = "Ambients";
    }])
    .controller('sensorsController', ['$scope', function($scope) {
        $scope.name = "Sensors";
    }]);