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

/**
document.querySelector("#leftDrawerMenu").addEventListener("core-select", function(e, detail) {

    console.log("core-item selected");
    console.dir(detail);

});

document.querySelector("#leftDrawerMenu").addEventListener("on-core-select", function(e, detail) {

    console.log("on-core-item selected");
    console.dir(detail);

});
**/

module.exports = angular.module('dashboard.files', [])
    .controller('FilesController', require('./controllers/FilesController'))

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home.files', {
            url: '^/files',
            views: {
                ".body": {
                    templateUrl: "modules/files/files.tpl.html",
                    controller: "FilesController"
                },
                ".leftDrawer": {
                    templateUrl: "modules/files/left-drawer.tpl.html"
                },
                ".rightDrawer": {
                    templateUrl: "modules/files/right-drawer.tpl.html"
                }
            }
        });

    }]);
