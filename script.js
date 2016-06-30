angular.module('leadlovers', [])
.controller('accordion', function($scope) {
  $scope.expand = false;
  $scope.collapse = false;
})
.directive("toggleaside", function () {
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
})
.directive("togglecategory", function () {
  return {
    restrict: 'A',
    scope: false,
    link: function (scope, element, attrs) {
      element.bind('click', function() {
        scope.$apply(function() {
          scope.collapse = !scope.collapse;
        });
      });
    }
  }
});