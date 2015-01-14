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

module.exports = angular.module('dashboard.photos-details', [])
    .controller('PhotosDetailsController', require('./controllers/PhotosDetailsController'))

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('home.photos-details', {
            url: '^/photos/:photoId',
            views: {
                ".body": {
                    templateUrl: "modules/photos-details/details.tpl.html",
                    controller: "PhotosDetailsController"
                },
                ".leftDrawer": {
                    templateUrl: "modules/photos-details/left-drawer.tpl.html"
                },
                ".rightDrawer": {
                    templateUrl: "modules/photos-details/right-drawer.tpl.html"
                }
            }
        });

    }]);
