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


module.exports = angular.module('familydam.directives.dirTree', ['familydam.services'])
    .directive("dirTree", ['directoryService',  function(directoryService) {
        var _scope;

        return {
            scope: {
                filter:"@",
                users:"@",
                selectedNode:"@"
            },
            replace: true,
            transclude: false,

            controller: function($scope) {
                $scope.selectedNode = undefined;
                $scope.expandedNodes = undefined;
                $scope.treeOptions = {
                    nodeChildren: "children",
                    dirSelectable: true,
                    injectClasses: {
                        ul: "treeList",
                        li: "treeItem",
                        liSelected: "treeSelected",
                        iExpanded: "treeExpanded",
                        iCollapsed: "treeCollapsed",
                        iLeaf: "treeLeaf",
                        label: "treeLabel",
                        labelSelected: "treeLabelSelected"
                    }
                };


                $scope.selectNode = function(node){
                    //console.log(node);
                    selectedNode = node;
                    //$scope.$root.$emit('selection', node);
                    $scope.$root.$broadcast('selection', node);
                };

                $scope.addFolder = function(event, nodePath){
                    event.preventDefault();
                };

                $scope.editFolder = function(event, element){
                    event.preventDefault();
                };

                $scope.deleteFolder = function(event, nodePath){
                    event.preventDefault();
                };

                directoryService.listDirectories().then(function(data){

                    if( data !== undefined )
                    {
                        $scope.directories = data;
                        for (var i = 0; i < data.length; i++)
                        {
                            var obj = data[i];
                            /**
                            if (obj.name.toLowerCase() == selectedNode)
                            {
                                $scope.selectedNode = obj;
                                break;
                            }**/
                        }
                    }
                });

            },

            link:function(scope, element, attrs, controller) {
                var _filter;
                var _selectedNode;
                scope.$watch('filter', function(value) {
                    _filter = value;
                });
                scope.$watch('selectedNode', function(value) {
                    _selectedNode = value;
                });
            },

            templateUrl: "directives/dirTree/dirtree.tpl.html"
        };
    }]);