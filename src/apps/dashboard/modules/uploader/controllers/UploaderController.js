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

var UploaderController = function($window, $document, $scope, $rootScope, $location, importService)
{
    $scope.selectedDir = "/photos/admin";
    $scope.folderList = [];
    $scope.fileList = [];
    $scope.visiblePath = $scope.path;


    $scope.$on('$stateChangeSuccess', function(){
        $rootScope.pageTitle = " ";
        $rootScope.leftSidebarVisible = false;
        $rootScope.rightSidebarVisible = false;
        //$mdSidenav("rightDrawer").close();
    });



    $scope.$on('selection', function(event, node){
        console.log(node);
        if( node !== undefined )
        {
            $scope.selectedDir = node.path;
            $scope.visiblePath = node.path.substring(1);
        }
    });


    $scope.fileSelectionHandler = function(event_){
        //console.log("upload file = " +event_);

        var files = event_.currentTarget.files;

        for (var i = 0; i < files.length; i++)
        {
            var _file = files[i];

            if( _file.path === undefined )
            {
                // simple browser behavior
                $scope.fileList.push(_file);
            }else{

                if( _file.webkitRelativePath.length > 0 && _file.path.endsWith(_file.webkitRelativePath) )
                {
                    //is a dir.
                    $scope.folderList.push(_file);
                } else {
                    //is a file
                    $scope.fileList.push(_file);
                }

            }

        }
    };


    $scope.removeFile = function(file_){
        //console.dir(file_);

        for (var i = 0; i < $scope.fileList.length; i++)
        {
            var obj = $scope.fileList[i];

            if( obj.path == file_ || obj.path == file_.path ){
                $scope.fileList.splice(i, 1);
                break;
            }
        }
    };


    $scope.removeFolder = function(folder_){
        console.dir(folder_);

        for (var i = 0; i < $scope.folderList.length; i++)
        {
            var obj = $scope.folderList[i];

            if( obj.path == folder_ || obj.path == folder_.path ){
                $scope.folderList.splice(i, 1);
                break;
            }
        }
    };


    /**
     * @deprecated now that file input fields work
     * Call back to OS shell and open the native dialog
     */
    $scope.openFileDialog = function(){
        try{
            var remote = require('remote');
            var ipc = require('ipc');

            ipc.on('openFileDialogReply', selectFilesHandler);
            ipc.send('openFileDialog');
        }catch(err){
            console.log(err);
        }
    };


    $scope.copyFiles = function(){

        for (var i = 0; i < $scope.fileList.length; i++)
        {
            var _file = $scope.fileList[i];
            if( _file.path !== undefined )
            {
                enableSpinner(_file.path);
                importService.isVisible(_file.path).then(function(result)
                {
                    var _path = result.data.path;
                    var visible = result.data.visible;

                    if( visible ) {
                        var request = importService.copyFile($scope.selectedDir, _path);
                        request.then(
                            function (response) {
                                if (response.status == 200 || response.status == 201) {
                                    $scope.removeFile(_path);
                                    $scope.removeFolder(_path);
                                } else {
                                    // Our server side copy failed, so let's try to do an old fashion form post (through the nodejs shell)
                                    //todo
                                    disableSpinner(_file.path);
                                    console.dir(response);
                                }

                            }, function (err, a2, a3, a4) {
                                disableSpinner(_file.path);
                                //todo
                                console.dir(err);
                                console.dir(a2);
                            }, function (progress) {
                                // report progress
                                console.log(progress);
                            });
                    }else{
                        importService.formUpload(_file.path);
                    }
                });

            }
            else
            {
                // the path is not defined, so most likely we are running in a browser (not desktop).
                // so we need to do a regular form upload.
                importService.formUpload(_file.path);
            }
        }

    };


    $scope.linkFiles = function(){
        //todo
    };


    /**
     * Replace the image with a spinner while we are uploading it.
     * @param _path
     */
    var enableSpinner = function(_path)
    {
        var element = angular.element(document.querySelectorAll("[data-path='" +_path +"']"));
        if( element !== undefined ){
            element.src="assets/images/loading-spin.svg";
        }
    };


    /**
     * Something happen so we will replace the spinner with the original image.
     * @param _path
     */
    var disableSpinner = function(_path)
    {
        var element = angular.element(document.querySelectorAll("[data-path='" +_path +"']"));
        if( element !== undefined ){
            element.src=element[data-path];
        }
    };


    /**
     * @Deprecated
     * @param path_

    var copyFile = function(path_){
        console.log("upload file = " +path_);

        var request = importService.copyFile($scope.selectedDir, path_);
        request.then(function(response) {
            if( response.status == 201 ) {
                $scope.removeFileByPath(path_);
            }else{
                // Our server side copy failed, so let's try to do an old fashion form post (through the nodejs shell)
                $window.uploadFile($scope.selectedDir, e.path);
            }

        }, function(a1,a2,a3,a4) {
            alert('Failed: ' + a1);

            // Our server side copy failed, so let's try to do an old fashion form post (through the nodejs shell)
            $window.uploadFile($scope.selectedDir, e.path);
        });
    }; */



};

UploaderController.$inject = ['$window', '$document', '$scope', '$rootScope', '$location', 'importService'];
module.exports = UploaderController;
