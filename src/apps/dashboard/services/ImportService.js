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

var ImportService = function($rootScope, $http)
{
    /**
     * Check to see if the file is visible to the embedded server, so we can do a quick copy. Instead of upload.
     * @param path
     * @returns {HttpPromise}
     */
    this.isVisible = function(path)
    {
        //todo: make url/port dynamic
        var method = $http.post($rootScope.baseUrl +'/api/import/info/', {
            'path':path
        });

        return method;
    };


    /**
     * Tell the embedded server to copy a local file, by path.
     * @param dir
     * @param path
     * @returns {HttpPromise}
     */
    this.copyFile = function(dir, path)
    {
        //todo: make url/port dynamic
        var method = $http.post($rootScope.baseUrl +'/api/import/copy/', {
            'dir': dir,
            'path':path,
            'recursive': true
        });

        return method;
    };


    /**
     * In the case when the embedded server can't access a file we have to do a regular html form upload.
     * Hopefully this is only for mobile apps.
     * @param dir
     * @param path
     */
    this.formUpload = function(dir, path)
    {
        //todo, old-school file upload
        //$window.uploadFile($scope.selectedDir, e.path);
    };


};

ImportService.$inject = ['$rootScope', '$http'];
module.exports = ImportService;