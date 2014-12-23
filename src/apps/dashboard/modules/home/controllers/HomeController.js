/*
 * This file is part of FamilyDAM Project.
 *
 *     The FamilyDAM Project is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     The FamilyDAM Project is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with the FamilyDAM Project.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Controller for the main application screen that controls the header and menu.
 * @param $scope
 * @param $window
 * @param $route
 * @param $location
 * @param cloverConfig
 * @param $dialog
 * @constructor
 */
var HomeController = function ($scope, $rootScope, $window, $location, $state, $stateParams, $mdSidenav) {

    var dirListPending = false;
    $rootScope.pageTitle = " ";
    $rootScope.leftSidebarVisible = true;
    $rootScope.rightSidebarVisible = false;


    $scope.toggleLeftSide = function(){
        $mdSidenav("leftSideNav").toggle();
    };

    $scope.toggleRightSide = function(){
        $mdSidenav("rightSideNav").toggle();
    };

    $scope.$on('$stateChangeSuccess', function(){
        $rootScope.pageTitle = " ";
        $rootScope.leftSidebarVisible = false;
        $rootScope.rightSidebarVisible = false;
        //$mdSidenav("rightDrawer").close();

    });

};

HomeController.$inject = ['$scope', '$rootScope', '$window', '$location', '$state', '$stateParams', '$mdSidenav'];
module.exports = HomeController;