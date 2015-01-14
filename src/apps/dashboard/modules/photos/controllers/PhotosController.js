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

var PhotosController = function($window, $document, $scope, $rootScope, $location, $timeout, searchService)
{
    var dirListPending = false;

    $scope.users = $rootScope.users;
    $scope.directories = [];
    $scope.folderList = [];
    $scope.fileList = [];


    $scope.$on('selection', function(event, node){
        console.log(node);
        if( node !== undefined )
        {
            var _path = node.path;
            getDirectoryList(_path);
        }
    });


    $scope.$on('$stateChangeSuccess', function(arg1, arg2, arg3){

        if (!dirListPending)
        {
            dirListPending = true;
            searchPhotos("/~/photos");

            $rootScope.pageTitle = " > Photos";
            $rootScope.leftSidebarVisible = true;
            $rootScope.rightSidebarVisible = false;
        }

    });


    $scope.showHeaders = function(){
        return $scope.folderList.length>0 && $scope.fileList.length>0;
    };


    var searchPhotos = function(path_)
    {
        //todo: add spinner
        var result = searchService.searchImages(100, 0, path_).then(
            function(data)
            {
                dirListPending = false;
                var _folderList = [];
                var _fileList = [];

                if( data !== undefined )
                {
                    for (var i = 0; i < data.length; i++)
                    {
                        var obj = data[i];
                        if (obj.type == "folder")
                        {
                            _folderList.push(obj);
                        } else {
                            _fileList.push(obj);
                        }
                    }

                    $scope.safeApply(function(){
                        $scope.folderList = _folderList.sort();
                        $scope.fileList = _fileList.sort();

                        console.dir($scope.folderList);
                        console.dir($scope.fileList);
                    });
                }
            },
            function(err){
                dirListPending = false;
                //todo, something
            }
        );

    };


    $scope.safeApply = function(fn) {
        var phase = this.$root.$$phase;
        if(phase == '$apply' || phase == '$digest') {
            if(fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };
};

PhotosController.$inject = ['$window', '$document', '$scope', '$rootScope', '$location', '$timeout', 'searchService'];
module.exports = PhotosController;
