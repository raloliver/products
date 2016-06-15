var app = angular.module('leadlovers', [])
app.controller('collapseToogle', function ($scope) {
    $scope.collapseHide = false;
    $scope.collapseShow = function () {
        $scope.collapseHide = $scope.collapseHide ? false : true;
    }
});
