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

var PhotosDetailsController = function($window, $document, $scope, $rootScope, contentService)
{
    var dirListPending = false;

    $scope.file = {};
    $scope.fullPath = "";//todo change to loading icon as the default

    $scope.$on('$stateChangeSuccess', function(event, state, data, arg4){

        $scope.fullPath = "http://localhost:9000/api/file/" +data.photoId +"?token=" +$scope.$root.token +"&rendition=web.1024";

        $rootScope.pageTitle = " > Photos > ...";
        $rootScope.leftSidebarVisible = false;
        $rootScope.rightSidebarVisible = false;


        // Call the server to get the rest of the data
        contentService.getNodeById(data.photoId).then(function(data){
            $scope.file = data;

            // update breadcrumb title
            var _path = data['jcr:path'].replace("/~/", "").replace("/", " > ");
            $rootScope.pageTitle = $rootScope.pageTitle.replace("Photos > ...", _path);
        });

    });
};

PhotosDetailsController.$inject = ['$window', '$document', '$scope', '$rootScope', 'contentService'];
module.exports = PhotosDetailsController;
