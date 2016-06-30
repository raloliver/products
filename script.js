// ng-scripts
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

// others
$(".mdl-button--notifications").click(function() {
  $(".mdl-layout__drawer-right").addClass("active");
  $(".mdl-layout__obfuscator-right").addClass("ob-active");
});

$(".mdl-layout__obfuscator-right").click(function() {
  $(".mdl-layout__drawer-right").removeClass("active");
  $(".mdl-layout__obfuscator-right").removeClass("ob-active");
});