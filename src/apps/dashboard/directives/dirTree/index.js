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


module.exports = angular.module('familydam.directives', ['familydam.services'])
    .directive("dirTree", ['directoryService',  function(directoryService) {
        var _scope;

        return {
            scope: {
                filter:"@",
                users:"@"
            },
            replace: true,
            transclude: false,

            link:function(scope, element, attrs, controller) {
                var _filter;
                scope.$watch('filter', function(value) {
                    _filter = value;
                });
            },

            template: "<div>Hello World TREE</div>"
            //templateUrl: "directives/dirTree/dirtree.tpl.html"
        };
    }]);