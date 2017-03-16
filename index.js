var upperApp = angular.module('upApp', []);

    upperApp.controller(
        'textController',
        function ($scope, $filter) {

            $scope.$watch('yourname', function (val) {

                $scope.yourname = $filter('uppercase')(val);

            }, true);
        }
    );