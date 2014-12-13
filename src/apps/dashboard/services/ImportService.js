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

var ImportService = function($http)
{
    this.isVisible = function(path)
    {
        //todo: make url/port dynamic
        var method = $http.post('http://localhost:9000/api/import/info/', {
            'path':path
        });

        return method;
    };


    this.copyFile = function(dir, path)
    {
        //todo: make url/port dynamic
        var method = $http.post('http://localhost:9000/api/import/copy/', {
            'dir': dir,
            'path':path,
            'recursive': true
        });

        return method;
    };


    this.formUpload = function(dir, path)
    {
        //todo, old-school file upload
        //$window.uploadFile($scope.selectedDir, e.path);
    };


};

ImportService.$inject = ['$http'];
module.exports = ImportService;