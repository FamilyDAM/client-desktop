angular.module('dashboard.templates', ['apps/dashboard/directives/dirTree/addFolderDialog.tpl.html', 'apps/dashboard/directives/dirTree/dirtree.tpl.html', 'apps/dashboard/directives/fileCard/photoCard.tpl.html', 'apps/dashboard/modules/files/files.tpl.html', 'apps/dashboard/modules/files/left-drawer.tpl.html', 'apps/dashboard/modules/files/right-drawer.tpl.html', 'apps/dashboard/modules/home/home.tpl.html', 'apps/dashboard/modules/login/login.tpl.html', 'apps/dashboard/modules/photos-details/details.tpl.html', 'apps/dashboard/modules/photos-details/left-drawer.tpl.html', 'apps/dashboard/modules/photos-details/right-drawer.tpl.html', 'apps/dashboard/modules/photos/details-right-drawer.tpl.html', 'apps/dashboard/modules/photos/left-drawer.tpl.html', 'apps/dashboard/modules/photos/photos.tpl.html', 'apps/dashboard/modules/photos/right-drawer.tpl.html', 'apps/dashboard/modules/uploader/left-drawer.tpl.html', 'apps/dashboard/modules/uploader/uploader.tpl.html']);

angular.module("apps/dashboard/directives/dirTree/addFolderDialog.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/directives/dirTree/addFolderDialog.tpl.html",
    "<md-dialog aria-label=\"Add Folder\">\n" +
    "    <md-content>\n" +
    "        <md-subheader class=\"md-sticky-no-effect\" data-l10n=\"dialog.add_folder\">Add Folder</md-subheader>\n" +
    "        <form style=\"padding: 20px;\">\n" +
    "            <div class=\"row\">\n" +
    "                <md-text-float label=\"Folder Name\" ng-model=\"model.name\"  data-l10n=\"dialog.folder_name\" data-l10n-attr=\"label\"></md-text-float>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </md-content>\n" +
    "    <div class=\"md-actions\" layout=\"row\">\n" +
    "        <span flex></span>\n" +
    "        <md-button ng-click=\"cancel()\" data-l10n=\"dialog.cancel\">\n" +
    "            Cancel\n" +
    "        </md-button>\n" +
    "        <md-button ng-click=\"answer( {path:'/~/documents', name:'new folder'} )\" class=\"md-primary\" data-l10n=\"dialog.create_folder\">\n" +
    "            Create Folder\n" +
    "        </md-button>\n" +
    "    </div>\n" +
    "</md-dialog>");
}]);

angular.module("apps/dashboard/directives/dirTree/dirtree.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/directives/dirTree/dirtree.tpl.html",
    "<div class=\"dirTree\">\n" +
    "\n" +
    "    <md-toolbar style=\"background-color: #F5F5F5;\">\n" +
    "        <h2 class=\"md-toolbar-tools\">\n" +
    "            <div flex style=\"color:#212121;\">Folders</div>\n" +
    "            <span ng-click=\"addFolder($event, node)\" style=\"display: table-cell;\">\n" +
    "            <img src=\"assets/icons/ic_add_48px.svg\" style=\"width:36px; height: 36px;\">\n" +
    "            </span>\n" +
    "        </h2>\n" +
    "    </md-toolbar>\n" +
    "\n" +
    "\n" +
    "    <ul class=\"tree\">\n" +
    "        <li ng-repeat=\"dir in directories\" ng-click=\"selectNode(dir)\">{{dir.name}}\n" +
    "            <ul class=\"tree\">\n" +
    "                <li ng-repeat=\"dir2 in dir.children\" ng-click=\"selectNode(dir2)\">{{dir2.name}}\n" +
    "                    <ul class=\"tree\">\n" +
    "                        <li ng-repeat=\"dir3 in dir2.children\" ng-click=\"selectNode(dir3)\">{{dir3.name}}</li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "\n" +
    "\n" +
    "    <!--\n" +
    "    <treecontrol id=\"treeControl\"\n" +
    "                 tree-model=\"directories\"\n" +
    "                 options=\"treeOptions\"\n" +
    "                 on-selection=\"selectNode(node)\">\n" +
    "        <div >\n" +
    "            <span style=\"display: table-cell; width: 100%\">{{node.name}}</span>\n" +
    "-->\n" +
    "        <!--\n" +
    "            <span ng-click=\"editFolder($event, node)\" style=\"display: table-cell;\">\n" +
    "                <img src=\"assets/icons/ic_edit_24px.svg\" style=\"width:18px; height: 18px;\">\n" +
    "            </span>\n" +
    "\n" +
    "            <span ng-click=\"deleteFolder($event, node)\" style=\"display: table-cell;\">\n" +
    "                <img src=\"assets/icons/ic_remove_circle_24px.svg\" style=\"width:18px; height: 18px;\">\n" +
    "            </span>\n" +
    "        -->\n" +
    "    <!--\n" +
    "        </div>\n" +
    "    </treecontrol>\n" +
    "    -->\n" +
    "</div>");
}]);

angular.module("apps/dashboard/directives/fileCard/photoCard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/directives/fileCard/photoCard.tpl.html",
    "<md-card class=\"file dirTree\" layout=\"column\" style=\"width:220px; height:240px;float:left\" ng-click=\"toggleSelection()\">\n" +
    "    <div class=\"thumbnail\">\n" +
    "        <img\n" +
    "             src=\"{{fullPath}}\"\n" +
    "             data-path=\"{{file.path}}\"\n" +
    "             style=\"width:auto;max-width:200px;max-height:200px;display: block;margin: auto;margin-top: 5px;\"/>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "        <h3 style=\"text-align: center\">{{file.name}}</h3>\n" +
    "    </div>\n" +
    "</md-card>\n" +
    "");
}]);

angular.module("apps/dashboard/modules/files/files.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/modules/files/files.tpl.html",
    "<!-- MAIN -->\n" +
    "<div class=\"filesBody\" flex layout=\"column\">\n" +
    "\n" +
    "    <md-content  style=\"width:100%;\">\n" +
    "        <md-subheader class=\"md-primary\">Folders</md-subheader>\n" +
    "        <md-list>\n" +
    "            <md-item  ng-repeat=\"folder in folderList\">\n" +
    "                <md-item-content>\n" +
    "                    <md-card class=\"folder\" layout=\"row\">\n" +
    "                        <div class=\"icon\"></div>\n" +
    "                        <div style=\"text-align: center\">\n" +
    "                            <h2>{{folder.name}}</h2>\n" +
    "                        </div>\n" +
    "                    </md-card>\n" +
    "                </md-item-content>\n" +
    "            </md-item>\n" +
    "        </md-list>\n" +
    "\n" +
    "\n" +
    "        <md-subheader class=\"md-primary\">Files</md-subheader>\n" +
    "        <md-list>\n" +
    "            <md-item  ng-repeat=\"file in fileList \">\n" +
    "                <md-item-content>\n" +
    "                    <md-card class=\"file\" layout=\"row\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img src=\"http://localhost:9000{{file.path}}?token={{token}}&rendition=thumbnail.200\"/>\n" +
    "                        </div>\n" +
    "                        <div>\n" +
    "                            <h3 style=\"text-align: left\">{{file.name}}</h3>\n" +
    "                        </div>\n" +
    "                    </md-card>\n" +
    "                </md-item-content>\n" +
    "            </md-item>\n" +
    "        </md-list>\n" +
    "\n" +
    "    </md-content>\n" +
    "</div>\n" +
    "");
}]);

angular.module("apps/dashboard/modules/files/left-drawer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/modules/files/left-drawer.tpl.html",
    "<!-- FILE LEFT DRAWER -->\n" +
    "<md-content>\n" +
    "\n" +
    "    <div dir-tree\n" +
    "        selectedNode=\"photos\">\n" +
    "    </div>\n" +
    "\n" +
    "</md-content>");
}]);

angular.module("apps/dashboard/modules/files/right-drawer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/modules/files/right-drawer.tpl.html",
    "\n" +
    "<!--\n" +
    "  ~ This file is part of FamilyDAM Project.\n" +
    "  ~\n" +
    "  ~     The FamilyDAM Project is free software: you can redistribute it and/or modify\n" +
    "  ~     it under the terms of the GNU General Public License as published by\n" +
    "  ~     the Free Software Foundation, either version 3 of the License, or\n" +
    "  ~     (at your option) any later version.\n" +
    "  ~\n" +
    "  ~     The FamilyDAM Project is distributed in the hope that it will be useful,\n" +
    "  ~     but WITHOUT ANY WARRANTY; without even the implied warranty of\n" +
    "  ~     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n" +
    "  ~     GNU General Public License for more details.\n" +
    "  ~\n" +
    "  ~     You should have received a copy of the GNU General Public License\n" +
    "  ~     along with the FamilyDAM Project.  If not, see <http://www.gnu.org/licenses/>.\n" +
    "  -->\n" +
    "\n" +
    "<div>\n" +
    "\n" +
    "\n" +
    "    <div id=\"content\" style=\"background-color: #fff; position: absolute; width: 256px;\">\n" +
    "        PREVIEW {{rightSidebarVisible}}\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("apps/dashboard/modules/home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/modules/home/home.tpl.html",
    "<md-content flex layout=\"column\">\n" +
    "\n" +
    "    <md-toolbar>\n" +
    "        <div class=\"md-toolbar-tools md-toolbar-tools-top\" layout=\"row\">\n" +
    "            <div flex-order=\"1\" alt=\"FamilyD.A.M (Digital Asset Manager)\" data-l10n=\"home.logo.alt\"\n" +
    "                 data-l10n-attr=\"alt\">FamilyDAM (logo)\n" +
    "            </div>\n" +
    "            <div flex-order=\"2\" flex></div>\n" +
    "\n" +
    "            <md-tabs flex-order=\"3\" md-selected=\"data.selectedIndex\" style=\"width:225px;\">\n" +
    "                <md-tab id=\"tab1\" aria-controls=\"tab1-content\" ui-sref=\"home.files\" data-l10n=\"home.files\">Files\n" +
    "                </md-tab>\n" +
    "                <md-tab id=\"tab2\" aria-controls=\"tab2-content\" ui-sref=\"home.photos\" data-l10n=\"home.photos\">Photos\n" +
    "                </md-tab>\n" +
    "            </md-tabs>\n" +
    "            <!--\n" +
    "            <md-button ui-sref=\"home.files\" md-no-ink class=\"md-primary\" style=\"color:#fff;\" data-l10n=\"home.files\">Files</md-button>\n" +
    "            <md-button ui-sref=\"home.photos\" md-no-ink class=\"md-primary\" style=\"color:#fff;\" data-l10n=\"home.photos\">Photos</md-button>\n" +
    "            <md-button aria-label=\"Search\" icon=\"search\"  data-l10n=\"home.search\"  data-l10n-attr=\"aria-label\"></md-button>\n" +
    "            <md-button aria-label=\"More Options\" icon=\"more-vert\"  data-l10n=\"home.more_options\" data-l10n-attr=\"aria-label\"></md-button>\n" +
    "            -->\n" +
    "        </div>\n" +
    "        <span flex></span>\n" +
    "\n" +
    "\n" +
    "        <div class=\"md-toolbar-tools\" layout-arrange=\"center center\">\n" +
    "            <md-icon\n" +
    "                    icon=\"assets/icons/ic_home_24px.svg\"\n" +
    "                    aria-label=\"Home\" alt=\"Home\" data-l10n=\"home.icon.alt\" data-l10n-attr=\"alt,aria-label\"\n" +
    "                    style=\"width: 24px; height: 24px;\">\n" +
    "            </md-icon>\n" +
    "            <span><a ui-sref=\"home\" data-l10n=\"home.home\">Home</a>{{pageTitle}}</span>\n" +
    "\n" +
    "            <div flex/>\n" +
    "            <md-button class=\"md-fab md-primary\" md-theme=\"green\" aria-label=\"Upload\" ui-sref=\"home.uploader\"\n" +
    "                       style=\"top: 30px; right:50px;\"\n" +
    "                       data-l10n=\"home.upload\" data-l10n-attr=\"aria-label\">\n" +
    "                <md-icon icon=\"assets/icons/ic_add_24px.svg\"\n" +
    "                     style=\"width: 24px; height: 24px;\"\n" +
    "                     ui-sref=\"home.uploader\"></md-icon>\n" +
    "            </md-button>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "    </md-toolbar>\n" +
    "\n" +
    "\n" +
    "    <section layout=\"row\" flex>\n" +
    "        <aside class=\"md-whiteframe-z2\"\n" +
    "               id=\"leftSideNav\"\n" +
    "               ng-show=\"leftSidebarVisible\"\n" +
    "                style=\"width:300px; width: 300px;top: 0px;position: relative;z-index: 2;\">\n" +
    "            <div ui-view=\".leftDrawer\" flex></div>\n" +
    "        </aside>\n" +
    "\n" +
    "\n" +
    "        <div layout=\"column\" flex layout-fill layout-align=\"start\">\n" +
    "            <md-content class=\"md-padding\" style=\"width:100%;\">\n" +
    "                <div ui-view=\".body\"></div>\n" +
    "            </md-content>\n" +
    "        </div>\n" +
    "\n" +
    "        <md-sidenav\n" +
    "                class=\"md-whiteframe-z1\"\n" +
    "                style=\"height: 100%\"\n" +
    "                ng-show=\"rightSidebarVisible\">\n" +
    "            <md-content class=\"md-padding\">\n" +
    "                <div ui-view=\".rightDrawer\" flex></div>\n" +
    "            </md-content>\n" +
    "        </md-sidenav>\n" +
    "\n" +
    "    </section>\n" +
    "\n" +
    "</md-content>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("apps/dashboard/modules/login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/modules/login/login.tpl.html",
    "\n" +
    "<div class=\"header loginTemplate\" layout=\"vertical\" layout-align=\"center\" layout-fill>\n" +
    "<div class=\"\">\n" +
    "    <div class=\"timestamp\">{{nowTimestamp|date:'h:mm:ss a'}}</div>\n" +
    "</div>\n" +
    "\n" +
    "<div flex>&nbsp;</div>\n" +
    "\n" +
    "<div id=\"loginUsers\" layout=\"horizontal\" layout-align=\"center center\" md-theme=\"indigo\">\n" +
    "    <md-card ng-click=\"selectLoginUser($event, 'mike');\"  ng-repeat=\"user in users\">\n" +
    "        <div layout=\"horizontal\">\n" +
    "            <div>\n" +
    "                <div class=\"box\">&nbsp;</div>\n" +
    "                <h2>{{user.username}}</h2>\n" +
    "                <div class=\"md-ripple-container\"></div>\n" +
    "            </div>\n" +
    "            <div id=\"loginForm\" layout=\"vertical\" style=\"width:300px;\" >\n" +
    "\n" +
    "                <h3>{{loginForm.username}}</h3>\n" +
    "                <div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <md-text-float type=\"password\" label=\"Password\" ng-model=\"loginForm.password\" style=\"width:100%\"> </md-text-float>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                    <div layout=\"horizontal\">\n" +
    "                        <md-button ng-click=\"handleLogin($event, user.username)\" class=\"md-raised md-primary\">Login</md-button>\n" +
    "                        <md-button ng-click=\"cancelLogin($event)\" target=\"_blank\">cancel</md-button>\n" +
    "                    </div>\n" +
    "                    <br/>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-card>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div flex>&nbsp;</div>\n" +
    "\n" +
    "<!--\n" +
    "<login-users\n" +
    "        id=\"loginUsersList\"\n" +
    "        users=\"{{users}}\"\n" +
    "        validationMessage=\"{{validationErrorMessage}}\"\n" +
    "        login-event-bridge></login-users>\n" +
    "        -->\n" +
    "</div>");
}]);

angular.module("apps/dashboard/modules/photos-details/details.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/modules/photos-details/details.tpl.html",
    "<!--\n" +
    "  ~ This file is part of FamilyDAM Project.\n" +
    "  ~\n" +
    "  ~     The FamilyDAM Project is free software: you can redistribute it and/or modify\n" +
    "  ~     it under the terms of the GNU General Public License as published by\n" +
    "  ~     the Free Software Foundation, either version 3 of the License, or\n" +
    "  ~     (at your option) any later version.\n" +
    "  ~\n" +
    "  ~     The FamilyDAM Project is distributed in the hope that it will be useful,\n" +
    "  ~     but WITHOUT ANY WARRANTY; without even the implied warranty of\n" +
    "  ~     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n" +
    "  ~     GNU General Public License for more details.\n" +
    "  ~\n" +
    "  ~     You should have received a copy of the GNU General Public License\n" +
    "  ~     along with the FamilyDAM Project.  If not, see <http://www.gnu.org/licenses/>.\n" +
    "  -->\n" +
    "\n" +
    "<!-- MAIN -->\n" +
    "<div class=\"photoDetails\" flex layout=\"column\" style=\"width:inherit;\">\n" +
    "\n" +
    "\n" +
    "    <div class=\"image\" layout=\"row\" style=\"width:100%;\">\n" +
    "        <div layout=\"column\" layout-align=\"center center\" style=\"width:50px;\">\n" +
    "            <img src=\"assets/icons/ic_chevron_left_48px.svg\" style=\"height: 72px;\">\n" +
    "        </div>\n" +
    "\n" +
    "        <img\n" +
    "                src=\"{{fullPath}}\"\n" +
    "                data-path=\"{{file.path}}\"\n" +
    "                style=\"width: auto; height: 600px; display: block; margin: 0px auto; padding: 25px;\"/>\n" +
    "\n" +
    "        <div layout=\"column\" layout-align=\"center center\" style=\"width:50px;\">\n" +
    "            <img src=\"assets/icons/ic_chevron_right_48px.svg\"\n" +
    "                 style=\"height: 72px;\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <hr/>\n" +
    "\n" +
    "    <div layout=\"row\" style=\"width:70%; margin: auto;\">\n" +
    "        <div style=\"width:50%;margin-left:20px; margin-right:20px;\">\n" +
    "            <img src=\"assets/icons/ic_file_download_24px.svg\" style=\"width:36px; height:36px;\"/>\n" +
    "            <img src=\"assets/icons/ic_mode_edit_24px.svg\" style=\"width:36px; height:36px;\"/>\n" +
    "            <img src=\"assets/icons/ic_delete_24px.svg\" style=\"width:36px; height:36px;\"/>\n" +
    "            <img src=\"assets/icons/ic_share_24px.svg\" style=\"width:36px; height:36px;\"/>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div style=\"width:50%;margin-left:20px; margin-right:20px;text-align: end;\">\n" +
    "            <span style=\"font-size: 24px\">Jan, 01 2013</span>\n" +
    "\n" +
    "            <br/>\n" +
    "\n" +
    "            <img src=\"assets/icons/ic_star_24px.svg\"\n" +
    "                 style=\"width: 24px; height: 24px;\">\n" +
    "            <img src=\"assets/icons/ic_star_24px.svg\"\n" +
    "                 style=\"width: 24px; height: 24px;\">\n" +
    "            <img src=\"assets/icons/ic_star_24px.svg\"\n" +
    "                 style=\"width: 24px; height: 24px;\">\n" +
    "            <img src=\"assets/icons/ic_star_24px.svg\"\n" +
    "                 style=\"width: 24px; height: 24px;\">\n" +
    "            <img src=\"assets/icons/ic_star_outline_24px.svg\"\n" +
    "                 style=\"width: 24px; height: 24px;\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <hr style=\"width:70%; margin: auto; margin-top:15px; margin-bottom:15px;\"/>\n" +
    "\n" +
    "\n" +
    "    <div layout=\"row\" style=\"width:70%; margin: auto;\">\n" +
    "\n" +
    "        <div style=\"width:50%; margin-left:20px; margin-right:20px;\">\n" +
    "            Notes:\n" +
    "            <textarea style=\"width:100%; height: 150px\"/>\n" +
    "\n" +
    "\n" +
    "            <div\n" +
    "                    style=\"width:100%;background-color:#FFFFFF;font-family:Arial;text-align:center;margin-top: 20px;\">\n" +
    "                <div style=\"padding:5px;\">\n" +
    "                    <a href=\"\"\n" +
    "                       style=\"padding:10px;font-size:12px;text-decoration:none; color: #87A800;\">Landscape</a>\n" +
    "                    <a href=\"\"\n" +
    "                       style=\"padding:10px;font-size:16px;text-decoration:none; color: #FF7600;\">kids</a>\n" +
    "                    <a href=\"\"\n" +
    "                       style=\"padding:10px;font-size:19px;text-decoration:none; color: #87A800;\">Hailey</a>\n" +
    "                    <a href=\"\"\n" +
    "                       style=\"padding:10px;font-size:16px;text-decoration:none; color: #039FAF;\">Kayden</a>\n" +
    "                    <a href=\"\"\n" +
    "                       style=\"padding:10px;font-size:14px;text-decoration:none; color: #039FAF;\">mike</a>\n" +
    "                    <a href=\"\"\n" +
    "                       style=\"padding:10px;font-size:16px;text-decoration:none; color: #DE2159;\">Angie</a>\n" +
    "                    <a href=\"\"\n" +
    "                       style=\"padding:10px;font-size:12px;text-decoration:none; color: #DE2159;\">Vacation</a>\n" +
    "                    <a href=\"\"\n" +
    "                       style=\"padding:10px;font-size:12px;text-decoration:none; color: #87A800;\">Work</a>\n" +
    "                    <a href=\"\"\n" +
    "                       style=\"padding:10px;font-size:16px;text-decoration:none; color: #FF7600;\">Baseball</a>\n" +
    "                    <a href=\"\"\n" +
    "                       style=\"padding:10px;font-size:19px;text-decoration:none; color: #87A800;\">Birthday</a>\n" +
    "                    <a href=\"\"\n" +
    "                       style=\"padding:10px;font-size:16px;text-decoration:none; color: #039FAF;\">School</a>\n" +
    "                    <a href=\"\"\n" +
    "                       style=\"padding:10px;font-size:14px;text-decoration:none; color: #039FAF;\">B&W</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div style=\"width:50%;margin-left:20px; margin-right:20px;\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "            <div>\n" +
    "            <img src=\"https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284\"\n" +
    "                 style=\"width:300px;\"/>\n" +
    "            <br/>\n" +
    "\n" +
    "            Naperville, IL<br/>\n" +
    "            48.12314 / -123.1235123\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <hr style=\"margin-top: 15px; margin-bottom: 15px;\"/>\n" +
    "\n" +
    "\n" +
    "            <table style=\"width: 100%;\" >\n" +
    "                <tr>\n" +
    "                    <td style=\"width: 50px;\">\n" +
    "                        <img src=\"assets/icons/ic_photo_camera_48px.svg\"\n" +
    "                             style=\"width: 48px; height: 48px;\">\n" +
    "                    </td>\n" +
    "                    <td colspan=\"3\" style=\"width:100%;\">\n" +
    "                        Nikon D90<br/>\n" +
    "                        10mm - 200mm<br/>\n" +
    "                        f/3.5-5.6 IS\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "\n" +
    "            <table style=\"width: 100%;\">\n" +
    "                <tr>\n" +
    "                    <td colspan=\"2\" style=\"width:50%;\">\n" +
    "                        <img src=\"assets/icons/ic_photo_camera_48px.svg\"\n" +
    "                             style=\"width: 12px; height: 12px;\">\n" +
    "                        f/4.0\n" +
    "                    </td>\n" +
    "                    <td colspan=\"2\" style=\"width:50%;\">\n" +
    "                        <img src=\"assets/icons/ic_photo_camera_48px.svg\"\n" +
    "                             style=\"width: 12px; height: 12px;\">\n" +
    "                        50mm\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td colspan=\"2\">\n" +
    "                        <img src=\"assets/icons/ic_photo_camera_48px.svg\"\n" +
    "                             style=\"width: 12px; height: 12px;\">\n" +
    "                        1/400\n" +
    "                    </td>\n" +
    "                    <td colspan=\"2\">\n" +
    "\n" +
    "                        <img src=\"assets/icons/ic_photo_camera_48px.svg\"\n" +
    "                             style=\"width: 12px; height: 12px;\">\n" +
    "                        200ISO\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td colspan=\"2\">\n" +
    "                        <img src=\"assets/icons/ic_photo_camera_48px.svg\"\n" +
    "                             style=\"width: 12px; height: 12px;\">\n" +
    "                        Flash:OFF\n" +
    "                    </td>\n" +
    "                    <td colspan=\"2\">\n" +
    "\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div style=\"width:70%;margin:auto; margin-top:30px; min-height:400px; border-right:1px solid #eee;border-left:1px solid #eee;\">\n" +
    "\n" +
    "        <md-tabs md-selected=\"selectedIndex\" >\n" +
    "            <md-tab label=\"Similar or Duplicate\" layout=\"grid\" >\n" +
    "                <div class=\"demo-tab\">\n" +
    "                    <md-card style=\"min-width:150px; min-height:150px;float:left;padding: 10px;\"><img src=\"http://loremflickr.com/150/150/dog\" style=\"margin:auto\"/></md-card>\n" +
    "                    <md-card style=\"min-width:150px; min-height:150px;float:left;padding: 10px;\"><img src=\"http://loremflickr.com/150/150/dog\" style=\"margin:auto\"/></md-card>\n" +
    "                    <md-card style=\"min-width:150px; min-height:150px;float:left;padding: 10px;\"><img src=\"http://loremflickr.com/150/150/dog\" style=\"margin:auto\"/></md-card>\n" +
    "                    <md-card style=\"min-width:150px; min-height:150px;float:left;padding: 10px;\"><img src=\"http://loremflickr.com/150/150/dog\" style=\"margin:auto\"/></md-card>\n" +
    "                    <md-card style=\"min-width:150px; min-height:150px;float:left;padding: 10px;\"><img src=\"http://loremflickr.com/150/150/dog\" style=\"margin:auto\"/></md-card>\n" +
    "\n" +
    "                </div>\n" +
    "            </md-tab>\n" +
    "\n" +
    "            <md-tab label=\"Renditions\">\n" +
    "                <div class=\"demo-tab\" layout=\"column\" layout-fill layout-align=\"space-around center\">\n" +
    "                    [List of renditions]\n" +
    "                </div>\n" +
    "            </md-tab>\n" +
    "\n" +
    "            <md-tab label=\"Albums\">\n" +
    "                <div class=\"demo-tab\" layout=\"column\" layout-fill layout-align=\"space-around center\">\n" +
    "                    [List of albums]\n" +
    "                </div>\n" +
    "            </md-tab>\n" +
    "        </md-tabs>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("apps/dashboard/modules/photos-details/left-drawer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/modules/photos-details/left-drawer.tpl.html",
    "<!--\n" +
    "  ~ This file is part of FamilyDAM Project.\n" +
    "  ~\n" +
    "  ~     The FamilyDAM Project is free software: you can redistribute it and/or modify\n" +
    "  ~     it under the terms of the GNU General Public License as published by\n" +
    "  ~     the Free Software Foundation, either version 3 of the License, or\n" +
    "  ~     (at your option) any later version.\n" +
    "  ~\n" +
    "  ~     The FamilyDAM Project is distributed in the hope that it will be useful,\n" +
    "  ~     but WITHOUT ANY WARRANTY; without even the implied warranty of\n" +
    "  ~     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n" +
    "  ~     GNU General Public License for more details.\n" +
    "  ~\n" +
    "  ~     You should have received a copy of the GNU General Public License\n" +
    "  ~     along with the FamilyDAM Project.  If not, see <http://www.gnu.org/licenses/>.\n" +
    "  -->\n" +
    "\n" +
    "<!-- PHOTO LEFT DRAWER -->\n" +
    "<md-content>\n" +
    "    <div dir-tree\n" +
    "         selectedNode=\"photos\">\n" +
    "    </div>\n" +
    "\n" +
    "</md-content>\n" +
    "");
}]);

angular.module("apps/dashboard/modules/photos-details/right-drawer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/modules/photos-details/right-drawer.tpl.html",
    "<!--\n" +
    "  ~ This file is part of FamilyDAM Project.\n" +
    "  ~\n" +
    "  ~     The FamilyDAM Project is free software: you can redistribute it and/or modify\n" +
    "  ~     it under the terms of the GNU General Public License as published by\n" +
    "  ~     the Free Software Foundation, either version 3 of the License, or\n" +
    "  ~     (at your option) any later version.\n" +
    "  ~\n" +
    "  ~     The FamilyDAM Project is distributed in the hope that it will be useful,\n" +
    "  ~     but WITHOUT ANY WARRANTY; without even the implied warranty of\n" +
    "  ~     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n" +
    "  ~     GNU General Public License for more details.\n" +
    "  ~\n" +
    "  ~     You should have received a copy of the GNU General Public License\n" +
    "  ~     along with the FamilyDAM Project.  If not, see <http://www.gnu.org/licenses/>.\n" +
    "  -->\n" +
    "\n" +
    "<div>\n" +
    "\n" +
    "    <div id=\"content\" style=\"background-color: #fff; position: absolute; width: 256px;\">\n" +
    "        DETAIL PREVIEW  {{rightSidebarVisible}}\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("apps/dashboard/modules/photos/details-right-drawer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/modules/photos/details-right-drawer.tpl.html",
    "<!--\n" +
    "  ~ This file is part of FamilyDAM Project.\n" +
    "  ~\n" +
    "  ~     The FamilyDAM Project is free software: you can redistribute it and/or modify\n" +
    "  ~     it under the terms of the GNU General Public License as published by\n" +
    "  ~     the Free Software Foundation, either version 3 of the License, or\n" +
    "  ~     (at your option) any later version.\n" +
    "  ~\n" +
    "  ~     The FamilyDAM Project is distributed in the hope that it will be useful,\n" +
    "  ~     but WITHOUT ANY WARRANTY; without even the implied warranty of\n" +
    "  ~     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n" +
    "  ~     GNU General Public License for more details.\n" +
    "  ~\n" +
    "  ~     You should have received a copy of the GNU General Public License\n" +
    "  ~     along with the FamilyDAM Project.  If not, see <http://www.gnu.org/licenses/>.\n" +
    "  -->\n" +
    "\n" +
    "<div>\n" +
    "\n" +
    "    <div id=\"content\" style=\"background-color: #fff; position: absolute; width: 256px;\">\n" +
    "        DETAIL PREVIEW  {{rightSidebarVisible}}\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("apps/dashboard/modules/photos/left-drawer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/modules/photos/left-drawer.tpl.html",
    "<!-- PHOTO LEFT DRAWER -->\n" +
    "<md-content>\n" +
    "    <div dir-tree\n" +
    "         selectedNode=\"photos\">\n" +
    "    </div>\n" +
    "<br/>\n" +
    "    <div class=\"tagCloud\">\n" +
    "        <md-toolbar style=\"background-color: #F5F5F5;\">\n" +
    "            <h2 class=\"md-toolbar-tools\">\n" +
    "                <div flex style=\"color:#212121;\">Tags</div>\n" +
    "                    <span ng-click=\"addFolder($event, node)\" style=\"display: table-cell;\">\n" +
    "                </span>\n" +
    "            </h2>\n" +
    "        </md-toolbar>\n" +
    "        <div\n" +
    "                style=\"width:100%;background-color:#FFFFFF;font-family:Arial; border: 1px solid #FFFFFF; text-align:center;\">\n" +
    "            <div style=\"padding:5px;\">\n" +
    "                <a href=\"\"\n" +
    "                   style=\"padding:10px;font-size:12px;text-decoration:none; color: #87A800;\">Landscape</a>\n" +
    "                <a href=\"\"\n" +
    "                   style=\"padding:10px;font-size:16px;text-decoration:none; color: #FF7600;\">kids</a>\n" +
    "                <a href=\"\"\n" +
    "                   style=\"padding:10px;font-size:19px;text-decoration:none; color: #87A800;\">Hailey</a>\n" +
    "                <a href=\"\"\n" +
    "                   style=\"padding:10px;font-size:16px;text-decoration:none; color: #039FAF;\">Kayden</a>\n" +
    "                <a href=\"\"\n" +
    "                   style=\"padding:10px;font-size:14px;text-decoration:none; color: #039FAF;\">mike</a>\n" +
    "                <a href=\"\"\n" +
    "                   style=\"padding:10px;font-size:16px;text-decoration:none; color: #DE2159;\">Angie</a>\n" +
    "                <a href=\"\"\n" +
    "                   style=\"padding:10px;font-size:12px;text-decoration:none; color: #DE2159;\">Vacation</a>\n" +
    "                <a href=\"\"\n" +
    "                   style=\"padding:10px;font-size:12px;text-decoration:none; color: #87A800;\">Work</a>\n" +
    "                <a href=\"\"\n" +
    "                   style=\"padding:10px;font-size:16px;text-decoration:none; color: #FF7600;\">Baseball</a>\n" +
    "                <a href=\"\"\n" +
    "                   style=\"padding:10px;font-size:19px;text-decoration:none; color: #87A800;\">Birthday</a>\n" +
    "                <a href=\"\"\n" +
    "                   style=\"padding:10px;font-size:16px;text-decoration:none; color: #039FAF;\">School</a>\n" +
    "                <a href=\"\"\n" +
    "                   style=\"padding:10px;font-size:14px;text-decoration:none; color: #039FAF;\">B&W</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</md-content>\n" +
    "");
}]);

angular.module("apps/dashboard/modules/photos/photos.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/modules/photos/photos.tpl.html",
    "<!-- MAIN -->\n" +
    "<div class=\"photoBody\" flex layout=\"column\" style=\"width:inherit;\">\n" +
    "\n" +
    "    <md-content>\n" +
    "        <md-list layout=\"column\">\n" +
    "            <md-toolbar class=\"md-theme-light\" ng-show=\"showHeaders()\">\n" +
    "                <h1 class=\"md-toolbar-tools\">\n" +
    "                    <span>Folders</span>\n" +
    "                </h1>\n" +
    "            </md-toolbar>\n" +
    "            <md-list layout=\"row\">\n" +
    "                <md-item ng-repeat=\"folder in folderList\">\n" +
    "                    <md-item-content>\n" +
    "                        <md-card class=\"folder\" layout=\"column\">\n" +
    "                            <div class=\"icon\"></div>\n" +
    "                            <div style=\"text-align: center\">\n" +
    "                                <h2>{{folder.name}}</h2>\n" +
    "                            </div>\n" +
    "                        </md-card>\n" +
    "                    </md-item-content>\n" +
    "                </md-item>\n" +
    "            </md-list>\n" +
    "\n" +
    "\n" +
    "            <md-toolbar class=\"md-theme-light\" ng-show=\"showHeaders()\">\n" +
    "                <h1 class=\"md-toolbar-tools\">\n" +
    "                    <span>Files</span>\n" +
    "                </h1>\n" +
    "            </md-toolbar>\n" +
    "            <div style=\"width:100%;\">\n" +
    "                <div ng-repeat=\"file in fileList\" file-card file=\"file\"></div>\n" +
    "            </div>\n" +
    "        </md-list>\n" +
    "    </md-content>\n" +
    "</div>\n" +
    "");
}]);

angular.module("apps/dashboard/modules/photos/right-drawer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/modules/photos/right-drawer.tpl.html",
    "<div>\n" +
    "\n" +
    "    <div id=\"content\" style=\"background-color: #fff; position: absolute; width: 256px;\">\n" +
    "        PREVIEW  {{rightSidebarVisible}}\n" +
    "        <dam-photo-lightbox id=\"photoLightbox\" style=\"display: none\"></dam-photo-lightbox>\n" +
    "        <preview-photo id=\"photoPreview\" style=\"display: none\"></preview-photo>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("apps/dashboard/modules/uploader/left-drawer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/modules/uploader/left-drawer.tpl.html",
    "<!-- Uploader LEFT DRAWER -->\n" +
    "<md-content>\n" +
    "        <div dir-tree\n" +
    "             selectedNode=\"documents\">\n" +
    "        </div>\n" +
    "</md-content>");
}]);

angular.module("apps/dashboard/modules/uploader/uploader.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/modules/uploader/uploader.tpl.html",
    "<!-- MAIN -->\n" +
    "<div layout=\"column\"  class=\"uploaderBody\" layout-align=\"center center\" >\n" +
    "    <div class=\"uploadButtons\">\n" +
    "        <div>\n" +
    "            <strong>Upload Location:</strong> {{visiblePath}}\n" +
    "        </div>\n" +
    "\n" +
    "        <div>\n" +
    "            Drag files, folders or\n" +
    "        </div>\n" +
    "        <!--\n" +
    "        <div>\n" +
    "            <button class=\"md-raised md-button md-primary\"\n" +
    "                    ng-click=\"openFileDialog()\">Select Files</button>\n" +
    "        </div>\n" +
    "        -->\n" +
    "        <div layout=\"row\">\n" +
    "            <input type=\"file\" multiple\n" +
    "                   class=\"md-raised md-button md-primary\"\n" +
    "                   onChange=\"angular.element(this).scope().fileSelectionHandler(event)\"\n" +
    "                   value=\"Select Files\"\n" +
    "                   style=\"width:95px\"/>\n" +
    "\n" +
    "            <input type=\"file\" webkitdirectory=\"\" directory=\"\"\n" +
    "                   class=\"md-raised md-button md-primary\"\n" +
    "                   onChange=\"angular.element(this).scope().fileSelectionHandler(event)\"\n" +
    "                   value=\"Select Folder\"\n" +
    "                   style=\"width:95px\"/>\n" +
    "\n" +
    "            <md-button\n" +
    "                   class=\"md-raised md-button md-primary\"\n" +
    "                   ng-click=\"copyFiles()\">Copy Files</md-button>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <md-content>\n" +
    "        <md-list>\n" +
    "            <md-subheader class=\"md-primary\">Folders</md-subheader>\n" +
    "            <md-list>\n" +
    "                <md-item ng-repeat=\"folder in folderList\">\n" +
    "                    <md-item-content>\n" +
    "                        <md-card class=\"folder\" layout=\"row\">\n" +
    "                            <div class=\"icon\"></div>\n" +
    "                            <div>\n" +
    "                                <h3>{{folder.name}}</h3>\n" +
    "                            </div>\n" +
    "                            <div flex></div>\n" +
    "                            <div layout-align=\"center center\">\n" +
    "                                <img src=\"assets/icons/ic_close_24px.svg\"\n" +
    "                                     style=\"width: 24px; height: 24px;\"\n" +
    "                                     ng-click=\"removeFolder(folder)\">\n" +
    "                            </div>\n" +
    "                        </md-card>\n" +
    "                    </md-item-content>\n" +
    "                </md-item>\n" +
    "            </md-list>\n" +
    "\n" +
    "\n" +
    "            <md-subheader class=\"md-primary\">Files</md-subheader>\n" +
    "            <md-list>\n" +
    "                <md-item ng-repeat=\"file in fileList \">\n" +
    "                    <md-item-content>\n" +
    "                        <md-card class=\"file\" layout=\"row\">\n" +
    "                            <div class=\"thumbnail\">\n" +
    "                                <img src=\"{{file.path}}\"\n" +
    "                                     data-path=\"{{file.path}}\"/>\n" +
    "                            </div>\n" +
    "                            <div>\n" +
    "                                <h3>{{file.name}}</h3>\n" +
    "                            </div>\n" +
    "                            <div flex></div>\n" +
    "                            <div layout-align=\"center center\">\n" +
    "                                <img src=\"assets/icons/ic_close_24px.svg\"\n" +
    "                                     style=\"width: 24px; height: 24px;\"\n" +
    "                                     ng-click=\"removeFile(file)\">\n" +
    "                            </div>\n" +
    "                        </md-card>\n" +
    "                    </md-item-content>\n" +
    "                </md-item>\n" +
    "            </md-list>\n" +
    "        </md-list>\n" +
    "    </md-content>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);
