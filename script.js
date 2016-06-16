angular.module('leadlovers', [])
.controller('accordion', function($scope) {
  $scope.expand = false;
})
.directive("toggleclass", function () {
  return {
    restrict: 'A',
    scope: false,
    link: function (scope, element, attrs) {
      element.bind('click', function() {
        scope.$apply(function() {
          scope.expand = !scope.expand;
        });
      });
    }
  }
});