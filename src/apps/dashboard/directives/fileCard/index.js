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


module.exports = angular.module('familydam.directives.fileCard', ['familydam.services'])
    .directive("fileCard", ['directoryService', '$window',  function(directoryService, $window) {
        var _scope;

        return {
            scope: {
                selected:"@",
                file:"=file"
            },
            replace: true,
            transclude: false,
            controllerAs: 'cntrl',

            controller: function($scope) {
                this.template = "directives/fileCard/photoCard.tpl.html";//$templateCache.get("apps/dashboard/directives/fileCard/photoCard.tpl.html");
                this.fullPath = "./assets/icons/ic_image_48px.svg";
                this.selected = "";

                $scope.toggleSelection = function()
                {
                    $scope.$root.$broadcast('root:selectedCard', {file:$scope.file});
                };

                // unselect all
                $scope.deselect = function(file_)
                {
                    $scope.$root.$broadcast('root:selectedCard', {file:null});
                };
            },

            link:function(scope, element, attrs, controller) {
                scope.visible = true;
                scope.fullPath = "./assets/icons/ic_image_48px.svg";

                scope.$watch('file', function(oldValue, newValue) {
                    scope.fullPath = "http://localhost:9000" +newValue.path +"?token=" +scope.$root.token +"&rendition=thumbnail.200";
                    scope.template = "directives/fileCard/photoCard.tpl.html";
                });


                scope.$on("root:selectedCard", function (event, data) {

                    if( data.file == null ){
                        scope.visible = true;
                        scope.template = "directives/fileCard/photoCard.tpl.html";
                    }else{
                        if (data.file.path != scope.file.path)
                        {
                            scope.visible = false;
                            scope.template = "directives/fileCard/photoCard.tpl.html";
                        } else
                        {
                            scope.visible = true;
                            scope.template = "directives/fileCard/photoCard-details.tpl.html";
                        }
                    }
                });

            },

            template: '<ng-include src="template" ng-show="visible"/>'
            //templateUrl: "directives/fileCard/photoCard.tpl.html"
        };
    }]);