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

var ContentService = function($rootScope, $http, AuthService)
{

    /**
     * Return all of the data for a single node
     * @param path
     * @param successCallback
     * @param errorCallback
     * @returns Object
     */
    this.getNodeById = function( id )
    {
        $http.defaults.headers.common['Authorization'] = AuthService.getToken();

        var searchPath = "/api/data/" +id;

        var method =  $http.get($rootScope.baseUrl +searchPath);
        return method.then(function(result){
            return result.data;
        });
    };

};

ContentService.$inject = ['$rootScope', '$http', 'authService'];
module.exports = ContentService;