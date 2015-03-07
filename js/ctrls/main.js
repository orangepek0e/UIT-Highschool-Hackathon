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

    $scope.selected = $scope.essay.first;

    $scope.getEssay = function(selected){
        $scope.selected = $scope.essay[selected];
    };

    $scope.change= function(index){

    };

    $scope.showMain = false;


}]);


