/**
 * Created by brianbest on 15-03-07.
 */
app.controller('mainCtrl',['$scope','$http', function($scope, $http) {
    $scope.essay = [
        '',
        '',
        '',
        '',
        ''
    ];

    $scope.select = 0;

    $scope.saveData = function(){
        $scope.essay[$scope.selecteda] = $scope.vals;
    };

    $scope.change= function(index){
        $scope.select = index;
        $scope.showMain = false;
        console.log($scope.essay[index]);
    };

    $scope.showMain = true;


}]);


