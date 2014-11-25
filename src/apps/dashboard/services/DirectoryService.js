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

var DirectoryService = function($http, $location, $q, AuthService, transformRequestAsFormPost)
{

    this.listDirectories = function()
    {
        $http.defaults.headers.common['Authorization'] = AuthService.getToken();

        //todo: make url/port dynamic
        var method = $http.get('http://localhost:8080/api/directory/tree');
        return method.then(
            function(result){
                return result.data;
            },
            function(err){
            // todo show in toast
            console.log("(" +err.status +") " +err.statusTextnot);
            $location.path('/login');
        });
    };



    this.list = function(path_, successCallback, errorCallback)
    {
        $http.defaults.headers.common['Authorization'] = AuthService.getToken();

        //todo: make url/port dynamic
        var data = {};
        data.path = path_;


        var request = $http({
            method: "post",
            url: "http://localhost:8080/api/directory/",
            transformRequest: transformRequestAsFormPost,
            data: data
        });

        if( successCallback !== undefined )
        {
            request.success(successCallback);
        }

        if( errorCallback !== undefined )
        {
            request.error(errorCallback);
        }

        return request.then(function(result){
            return result.data;
        }, function(err){
            // todo show in toast
            console.log("(" +err.status +") " +err.statusTextnot);
            $location.path('/login');
        });
    };


};

DirectoryService.$inject = ['$http', '$location', '$q', 'authService', 'transformRequestAsFormPost'];
module.exports = DirectoryService;