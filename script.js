angular.module('leadlovers', [])
    .directive('collapsible', collapsibleBlock);
        function collapsibleBlock(){  
            function collapsibleLink(scope, element, attrs){
                scope.collapsed = true;
                scope.title = attrs.collapsibleTitle;
                scope.collapsedIcon = attrs.collapsedIcon;
                scope.expandedIcon = attrs.expandedIcon;

                scope.toggle = function collapsibleToggle(e){
                e.preventDefault();
                scope.collapsed = !scope.collapsed;
                };
            }

            return {
                scope: {},
                restrict: 'E',
                replace: true,
                transclude: true,
                template: '<section class="clps" ng-class="{\'clps--expanded\': collapsed}">
                            <a href="#" class="clps__title" ng-click="toggle($event)">
                            <i class="{{collapsedIcon}}" ng-if="collapsedIcon && collapsed"></i>
                            <i class="{{expandedIcon}}" ng-if="expandedIcon && !collapsed"></i>
                            <span>{{title}}</span>
                            </a>

                            <section ng-transclude class="clps__content" ng-show="!collapsed"></section>
                        </section>',
                link: collapsibleLink
            }
        }