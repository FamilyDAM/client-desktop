angular.module('dashboard.templates', ['apps/dashboard/directives/dirTree/addFolderDialog.tpl.html', 'apps/dashboard/directives/dirTree/dirtree.tpl.html', 'apps/dashboard/directives/fileCard/photoCard-details.tpl.html', 'apps/dashboard/directives/fileCard/photoCard.tpl.html', 'apps/dashboard/modules/files/files.tpl.html', 'apps/dashboard/modules/files/left-drawer.tpl.html', 'apps/dashboard/modules/files/right-drawer.tpl.html', 'apps/dashboard/modules/home/home.tpl.html', 'apps/dashboard/modules/login/login.tpl.html', 'apps/dashboard/modules/photos/left-drawer.tpl.html', 'apps/dashboard/modules/photos/photos.tpl.html', 'apps/dashboard/modules/photos/right-drawer.tpl.html', 'apps/dashboard/modules/uploader/left-drawer.tpl.html', 'apps/dashboard/modules/uploader/uploader.tpl.html']);

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
    "    <treecontrol id=\"treeControl\" class=\"tree-classic\"\n" +
    "                 tree-model=\"directories\"\n" +
    "                 options=\"treeOptions\"\n" +
    "                 on-selection=\"selectNode(node)\">\n" +
    "            <span style=\"display: table-cell; width: 100%\">{{node.name}}</span>\n" +
    "\n" +
    "            <span ng-click=\"editFolder($event, node)\" style=\"display: table-cell;\">\n" +
    "                <img src=\"assets/icons/ic_edit_24px.svg\" style=\"width:18px; height: 18px;\">\n" +
    "            </span>\n" +
    "\n" +
    "            <span ng-click=\"addFolder($event, node)\" style=\"display: table-cell;\">\n" +
    "                <img src=\"assets/icons/ic_add_circle_24px.svg\" style=\"width:18px; height: 18px;\">\n" +
    "            </span>\n" +
    "\n" +
    "            <span ng-click=\"deleteFolder($event, node)\" style=\"display: table-cell;\">\n" +
    "                <img src=\"assets/icons/ic_remove_circle_24px.svg\" style=\"width:18px; height: 18px;\">\n" +
    "            </span>\n" +
    "\n" +
    "    </treecontrol>\n" +
    "</div>");
}]);

angular.module("apps/dashboard/directives/fileCard/photoCard-details.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/directives/fileCard/photoCard-details.tpl.html",
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
    "<md-card class=\"fileDetails\" layout=\"vertical\" style=\"width:99%\" >\n" +
    "    <div class=\"image\" style=\"background-color: #212124; width:100%;\">\n" +
    "        <img\n" +
    "             src=\"{{fullPath}}\"\n" +
    "             data-path=\"{{file.path}}\"\n" +
    "             style=\"width:auto;height:500px; display: block; margin: 0px auto; padding: 25px;\"/>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "        <div layout=\"horizontal\">\n" +
    "            <img src=\"assets/icons/ic_close_24px.svg\"\n" +
    "                 style=\"width: 24px; height: 24px;\"\n" +
    "                 ng-click=\"deselect(file)\">\n" +
    "            <h3>{{file.name}}</h3>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-card>\n" +
    "");
}]);

angular.module("apps/dashboard/directives/fileCard/photoCard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/directives/fileCard/photoCard.tpl.html",
    "<md-card class=\"file dirTree\" layout=\"vertical\" style=\"width:220px; height:240px;float:left\" ng-click=\"toggleSelection()\">\n" +
    "    <div class=\"thumbnail\">\n" +
    "        <img\n" +
    "             src=\"{{fullPath}}\"\n" +
    "             data-path=\"{{file.path}}\"\n" +
    "             style=\"width:auto;max-width:200px;max-height:200px;display: block;margin: auto;margin-top: 5px;\"/>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "        <h3>{{file.name}}</h3>\n" +
    "    </div>\n" +
    "</md-card>\n" +
    "");
}]);

angular.module("apps/dashboard/modules/files/files.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/modules/files/files.tpl.html",
    "<!-- MAIN -->\n" +
    "<div class=\"filesBody\" flex layout=\"vertical\">\n" +
    "\n" +
    "    <md-content>\n" +
    "        <md-subheader class=\"md-primary\">Folders</md-subheader>\n" +
    "        <md-list>\n" +
    "            <md-item  ng-repeat=\"folder in folderList\">\n" +
    "                <md-item-content>\n" +
    "                    <md-card class=\"folder\" layout=\"horizontal\">\n" +
    "                        <div class=\"icon\"></div>\n" +
    "                        <div>\n" +
    "                            <h3>{{folder.name}}</h3>\n" +
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
    "                    <md-card class=\"file\" layout=\"horizontal\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img src=\"http://localhost:9000{{file.path}}?token={{token}}&rendition=thumbnail.200\"/>\n" +
    "                        </div>\n" +
    "                        <div>\n" +
    "                            <h3>{{file.name}}</h3>\n" +
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
    "<!-- LEFT DRAWER -->\n" +
    "<div>\n" +
    "\n" +
    "\n" +
    "    <div id=\"content\" >\n" +
    "        <!--\n" +
    "        <div id=\"users\" style=\"margin: 20px;\" layout=\"horizontal\">\n" +
    "            <core-icon class=\"avatar\" icon=\"avatars:avatar-1\" aria-label=\"avatar-2\" role=\"img\"\n" +
    "                       ng-repeat=\"user in users\" tooltip=\"{{user.username}}\">\n" +
    "                <svg viewBox=\"0 0 128 128\" height=\"42px\" width=\"42px\"\n" +
    "                     preserveAspectRatio=\"xMidYMid meet\" fit=\"\"\n" +
    "                     style=\"pointer-events: none; display: block;\">\n" +
    "                    <g>\n" +
    "                        <path fill=\"#B9F6CA\" d=\"M0 0h128v128h-128z\"></path>\n" +
    "                        <path fill=\"#FFCC80\"\n" +
    "                              d=\"M70.1 122.5l.6-.1c6.1-.8 12-2.4 17.7-4.8 1.2-.5 2.4-1.1 3.2-2.1 1.3-1.7-.1-5.6-.5-7.7-.7-3.8-1.3-7.7-1.9-11.5-.7-4.5-1.5-9.1-1.6-13.7-.2-7.6.7-12.3 1.9-15.3h9l-2.6-10.4c-.2-2.4-.4-4.8-.7-6.8-.2-1.9-.6-3.6-1.2-5.3-14.9 2.2-24.5.9-30.7-1.8l-23.1 4.5-.7.1h-.7c-.4-.1-.9-.2-1.2-.4-.4 0-.9 0-1.4.1-4.1.6-6.9 4.7-6.3 9.1.3 2 1.2 3.8 2.6 5 .3.1 1.6.7 3.4 1.7.8.4 1.6 1 2.5 1.6 1.5 1.1 3.2 2.5 4.9 4.1 5.8 5.9 8.4 13.8 7.4 22-.6 4.7-2.2 9.4-4.4 13.6-.5 1-1 1.6-1.1 2.8-.1 1.1-.1 2.3.1 3.4.4 2.3 1.5 4.4 3 6.2 2.6 3.1 6.4 5 10.4 5.8 3.8.4 7.6.3 11.4-.1zm9.5-67.6c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6c-.1-.8.7-1.6 1.6-1.6zM128 97.7c-3.3 1.9-6.6 3.7-9.9 5.3-3.2 1.5-6.3 2.9-9.6 4.2-.9.4-2.1.5-2.9 1.1-1.1.8-1.9 2.5-2.3 3.7-.6 1.6-.6 3.4.3 4.8.8 1.2 2.1 2 3.5 2.6 5.9 2.9 12.2 5.1 18.6 6.5 1.4.3 2.3 1.8 2.4.1v-28.1c-.1.1-.1-.1-.1-.2z\"></path>\n" +
    "                        <path d=\"M38.9 47.4zM39.6 47.4z\" fill=\"none\"></path>\n" +
    "                        <path fill=\"#444\"\n" +
    "                              d=\"M94.2 44.9c-.8-2.6-1.8-5-3.2-7.2l-7.2 1.4-20.4 4c6.3 2.7 15.9 4 30.8 1.8z\"></path>\n" +
    "                        <path fill=\"#E65100\"\n" +
    "                              d=\"M38.9 48.4h.7c.2 0 .5 0 .7-.1l23.1-4.5 20.4-4 23.3-4.5c1.9-.4 3.2-2 2.9-3.6-.3-1.6-2.1-2.6-4.1-2.3l-19.6 3.8-1.3-6.8c-2-10.9-15-17.7-29.1-14.9-14 2.7-23.7 13.9-21.6 24.9h.1l1.7 9v.7c.2.8.7 1.4 1.4 1.9.5.1 1 .3 1.4.4z\"></path>\n" +
    "                        <circle fill=\"#444\" cx=\"79.6\" cy=\"56.5\" r=\"2\"></circle>\n" +
    "                        <path fill=\"#689F38\"\n" +
    "                              d=\"M128 128v-1.8l-21.7-18.2-.4.2-2.9 1.3c-3 1.3-6 2.6-9.2 3.8l-1.4.5c-9 3.3-16.5 4.1-22.8 3.6-16.4-1.3-23.8-11.9-23.8-11.9-2.2 4.2-5.2 8.7-9.2 13.5l-.3.4-1.7 2c-.9 1.1-2 2.6-3.4 4.5-.4.6-.9 1.3-1.4 2l98.2.1z\"></path>\n" +
    "                        <path fill=\"#FFCC80\" d=\"M36.3 119.3s.1-.2.2-.3c-.1.1-.2.2-.2.3z\"></path>\n" +
    "                    </g>\n" +
    "                </svg>\n" +
    "            </core-icon>\n" +
    "        </div>\n" +
    "        -->\n" +
    "\n" +
    "        <br/><br/>\n" +
    "\n" +
    "        <div dir-tree\n" +
    "            selectedNode=\"photos\">\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
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
    "<md-content md-theme=\"indigo\" flex>\n" +
    "\n" +
    "    <md-toolbar class=\"md-tall\" style=\"z-index:99;\">\n" +
    "        <div class=\"md-toolbar-tools md-toolbar-tools-top\">\n" +
    "            <span alt=\"FamilyD.A.M (Digital Asset Manager)\"  data-l10n=\"home.logo.alt\"  data-l10n-attr=\"alt\">FamilyDAM (logo)</span>\n" +
    "            <span flex></span>\n" +
    "            <md-button ui-sref=\"home.files\" md-no-ink class=\"md-primary\" style=\"color:#fff;\" data-l10n=\"home.files\">Files</md-button>\n" +
    "            <md-button ui-sref=\"home.photos\" md-no-ink class=\"md-primary\" style=\"color:#fff;\" data-l10n=\"home.photos\">Photos</md-button>\n" +
    "            <md-button aria-label=\"Search\" icon=\"search\"  data-l10n=\"home.search\"  data-l10n-attr=\"aria-label\"></md-button>\n" +
    "            <md-button aria-label=\"More Options\" icon=\"more-vert\"  data-l10n=\"home.more_options\" data-l10n-attr=\"aria-label\"></md-button>\n" +
    "        </div>\n" +
    "        <span flex></span>\n" +
    "\n" +
    "        <h2 class=\"md-toolbar-tools\" layout-arrange=\"center center\">\n" +
    "            <md-icon\n" +
    "                    icon=\"assets/icons/ic_home_24px.svg\"\n" +
    "                    aria-label=\"Home\" alt=\"Home\" data-l10n=\"home.icon.alt\"  data-l10n-attr=\"alt,aria-label\"\n" +
    "                    style=\"width: 24px; height: 24px;\">\n" +
    "            </md-icon>\n" +
    "            <span><a ui-sref=\"home\" data-l10n=\"home.home\">Home</a>{{pageTitle}}</span>\n" +
    "        </h2>\n" +
    "\n" +
    "        <h2 class=\"md-toolbar-tools\" style=\"height:36px;background-color: #eeeeee; color:#000;\">\n" +
    "            <md-button aria-label=\"Toggle Left Side Nav\" md-no-ink  ng-click=\"toggleLeftSide()\" data-l10n=\"home.left\" data-l10n-attr=\"aria-label\">&gt;&gt;&gt;</md-button>\n" +
    "            <span flex></span>\n" +
    "\n" +
    "            <md-button class=\"md-fab md-primary\" md-theme=\"green\" aria-label=\"Upload\" ui-sref=\"home.uploader\" data-l10n=\"home.upload\" data-l10n-attr=\"aria-label\">\n" +
    "                <md-icon icon=\"assets/icons/ic_add_24px.svg\"\n" +
    "                         style=\"width: 24px; height: 24px;\"\n" +
    "                         ui-sref=\"home.uploader\"></md-icon>\n" +
    "            </md-button>\n" +
    "\n" +
    "            <md-button aria-label=\"Toggle Right Side Nav\" md-no-ink ng-click=\"toggleRightSide()\" data-l10n=\"home.right\" data-l10n-attr=\"aria-label\">&lt;&lt;&lt;</md-button>\n" +
    "        </h2>\n" +
    "    </md-toolbar>\n" +
    "\n" +
    "    <section layout=\"horizontal\" flex>\n" +
    "\n" +
    "        <md-sidenav class=\"md-sidenav-left md-whiteframe-z1\"\n" +
    "                    md-component-id=\"leftSideNav\"\n" +
    "                    style=\"height: 100%\" layout=\"vertical\"\n" +
    "                    is-locked-open=\"true\"\n" +
    "                    is-open=\"leftSidebarVisible\">\n" +
    "            <div ui-view=\".leftDrawer\" flex></div>\n" +
    "        </md-sidenav>\n" +
    "\n" +
    "\n" +
    "        <div layout=\"column\" flex layout-fill layout-align=\"start\">\n" +
    "            <md-content flex class=\"md-padding\" flex>\n" +
    "                <div ui-view=\".body\"></div>\n" +
    "            </md-content>\n" +
    "        </div>\n" +
    "\n" +
    "        <md-sidenav\n" +
    "                class=\"md-sidenav-right md-whiteframe-z1\"\n" +
    "                md-component-id=\"rightSideNav\"\n" +
    "                style=\"height: 100%\"\n" +
    "                is-open=\"rightSidebarVisible\">\n" +
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

angular.module("apps/dashboard/modules/photos/left-drawer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/modules/photos/left-drawer.tpl.html",
    "\n" +
    "<!-- LEFT DRAWER -->\n" +
    "<div>\n" +
    "\n" +
    "\n" +
    "    <div id=\"content\" >\n" +
    "        <!--\n" +
    "        <div id=\"users\" style=\"margin: 20px;\" layout=\"horizontal\">\n" +
    "            <core-icon class=\"avatar\" icon=\"avatars:avatar-1\" aria-label=\"avatar-2\" role=\"img\"\n" +
    "                       ng-repeat=\"user in users\" tooltip=\"{{user.username}}\">\n" +
    "                <svg viewBox=\"0 0 128 128\" height=\"42px\" width=\"42px\"\n" +
    "                     preserveAspectRatio=\"xMidYMid meet\" fit=\"\"\n" +
    "                     style=\"pointer-events: none; display: block;\">\n" +
    "                    <g>\n" +
    "                        <path fill=\"#B9F6CA\" d=\"M0 0h128v128h-128z\"></path>\n" +
    "                        <path fill=\"#FFCC80\"\n" +
    "                              d=\"M70.1 122.5l.6-.1c6.1-.8 12-2.4 17.7-4.8 1.2-.5 2.4-1.1 3.2-2.1 1.3-1.7-.1-5.6-.5-7.7-.7-3.8-1.3-7.7-1.9-11.5-.7-4.5-1.5-9.1-1.6-13.7-.2-7.6.7-12.3 1.9-15.3h9l-2.6-10.4c-.2-2.4-.4-4.8-.7-6.8-.2-1.9-.6-3.6-1.2-5.3-14.9 2.2-24.5.9-30.7-1.8l-23.1 4.5-.7.1h-.7c-.4-.1-.9-.2-1.2-.4-.4 0-.9 0-1.4.1-4.1.6-6.9 4.7-6.3 9.1.3 2 1.2 3.8 2.6 5 .3.1 1.6.7 3.4 1.7.8.4 1.6 1 2.5 1.6 1.5 1.1 3.2 2.5 4.9 4.1 5.8 5.9 8.4 13.8 7.4 22-.6 4.7-2.2 9.4-4.4 13.6-.5 1-1 1.6-1.1 2.8-.1 1.1-.1 2.3.1 3.4.4 2.3 1.5 4.4 3 6.2 2.6 3.1 6.4 5 10.4 5.8 3.8.4 7.6.3 11.4-.1zm9.5-67.6c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6c-.1-.8.7-1.6 1.6-1.6zM128 97.7c-3.3 1.9-6.6 3.7-9.9 5.3-3.2 1.5-6.3 2.9-9.6 4.2-.9.4-2.1.5-2.9 1.1-1.1.8-1.9 2.5-2.3 3.7-.6 1.6-.6 3.4.3 4.8.8 1.2 2.1 2 3.5 2.6 5.9 2.9 12.2 5.1 18.6 6.5 1.4.3 2.3 1.8 2.4.1v-28.1c-.1.1-.1-.1-.1-.2z\"></path>\n" +
    "                        <path d=\"M38.9 47.4zM39.6 47.4z\" fill=\"none\"></path>\n" +
    "                        <path fill=\"#444\"\n" +
    "                              d=\"M94.2 44.9c-.8-2.6-1.8-5-3.2-7.2l-7.2 1.4-20.4 4c6.3 2.7 15.9 4 30.8 1.8z\"></path>\n" +
    "                        <path fill=\"#E65100\"\n" +
    "                              d=\"M38.9 48.4h.7c.2 0 .5 0 .7-.1l23.1-4.5 20.4-4 23.3-4.5c1.9-.4 3.2-2 2.9-3.6-.3-1.6-2.1-2.6-4.1-2.3l-19.6 3.8-1.3-6.8c-2-10.9-15-17.7-29.1-14.9-14 2.7-23.7 13.9-21.6 24.9h.1l1.7 9v.7c.2.8.7 1.4 1.4 1.9.5.1 1 .3 1.4.4z\"></path>\n" +
    "                        <circle fill=\"#444\" cx=\"79.6\" cy=\"56.5\" r=\"2\"></circle>\n" +
    "                        <path fill=\"#689F38\"\n" +
    "                              d=\"M128 128v-1.8l-21.7-18.2-.4.2-2.9 1.3c-3 1.3-6 2.6-9.2 3.8l-1.4.5c-9 3.3-16.5 4.1-22.8 3.6-16.4-1.3-23.8-11.9-23.8-11.9-2.2 4.2-5.2 8.7-9.2 13.5l-.3.4-1.7 2c-.9 1.1-2 2.6-3.4 4.5-.4.6-.9 1.3-1.4 2l98.2.1z\"></path>\n" +
    "                        <path fill=\"#FFCC80\" d=\"M36.3 119.3s.1-.2.2-.3c-.1.1-.2.2-.2.3z\"></path>\n" +
    "                    </g>\n" +
    "                </svg>\n" +
    "            </core-icon>\n" +
    "        </div>\n" +
    "        -->\n" +
    "\n" +
    "        <br/><br/>\n" +
    "\n" +
    "\n" +
    "        <div dir-tree\n" +
    "            selectedNode=\"photos\">\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <div class=\"tagCloud\">\n" +
    "            <div\n" +
    "                    style=\"width:100%;background-color:#FFFFFF;font-family:Arial; border: 1px solid #FFFFFF; text-align:center;\">\n" +
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
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("apps/dashboard/modules/photos/photos.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/modules/photos/photos.tpl.html",
    "<!-- MAIN -->\n" +
    "<div class=\"photoBody\" flex layout=\"vertical\">\n" +
    "\n" +
    "    <md-content>\n" +
    "        <md-list layout=\"vertical\">\n" +
    "            <md-toolbar class=\"md-theme-light\" ng-show=\"showHeaders()\">\n" +
    "                <h1 class=\"md-toolbar-tools\">\n" +
    "                    <span>Folders</span>\n" +
    "                </h1>\n" +
    "            </md-toolbar>\n" +
    "            <md-list layout=\"horizontal\">\n" +
    "                <md-item ng-repeat=\"folder in folderList\">\n" +
    "                    <md-item-content>\n" +
    "                        <md-card class=\"folder\" layout=\"vertical\">\n" +
    "                            <div class=\"icon\"></div>\n" +
    "                            <div>\n" +
    "                                <h3>{{folder.name}}</h3>\n" +
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
    "            <div>\n" +
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
    "<!-- LEFT DRAWER -->\n" +
    "<div>\n" +
    "\n" +
    "\n" +
    "    <div id=\"content\" style=\"background-color: #fff; position: absolute;\">\n" +
    "\n" +
    "        <br/><br/>\n" +
    "\n" +
    "        <div dir-tree\n" +
    "             selectedNode=\"documents\">\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("apps/dashboard/modules/uploader/uploader.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/dashboard/modules/uploader/uploader.tpl.html",
    "<!-- MAIN -->\n" +
    "<div layout=\"vertical\"  class=\"uploaderBody\" layout-align=\"center center\" flex>\n" +
    "    <div class=\"uploadButtons\">\n" +
    "        <div>\n" +
    "            <strong>Upload Location:</strong> {{visiblePath}}\n" +
    "        </div>\n" +
    "        <br/><br/>\n" +
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
    "        <div layout=\"horizontal\">\n" +
    "            <input type=\"file\" multiple\n" +
    "                   class=\"md-raised md-button md-primary\"\n" +
    "                   onChange=\"angular.element(this).scope().fileSelectionHandler(event)\"\n" +
    "                   value=\"Select Files\"\n" +
    "                   style=\"width:85px\"/>\n" +
    "\n" +
    "            <input type=\"file\" webkitdirectory=\"\" directory=\"\"\n" +
    "                   class=\"md-raised md-button md-primary\"\n" +
    "                   onChange=\"angular.element(this).scope().fileSelectionHandler(event)\"\n" +
    "                   value=\"Select Folder\"\n" +
    "                   style=\"width:85px\"/>\n" +
    "\n" +
    "            <md-button\n" +
    "                   class=\"md-raised md-button md-primary\"\n" +
    "                   ng-click=\"copyFiles()\">Upload</md-button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div layout=\"horizontal\">\n" +
    "            <md-button class=\"md-raised md-button md-primary\" ng-click=\"uploadFiles();\">Copy Files</md-button>\n" +
    "            <md-button class=\"md-raised md-button md-primary\" ng-click=\"linkFiles()\">Link Files</md-button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <md-content>\n" +
    "        <md-list>\n" +
    "            <md-subheader class=\"md-primary\">Folders</md-subheader>\n" +
    "            <md-list>\n" +
    "                <md-item ng-repeat=\"folder in folderList\">\n" +
    "                    <md-item-content>\n" +
    "                        <md-card class=\"folder\" layout=\"horizontal\">\n" +
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
    "                        <md-card class=\"file\" layout=\"horizontal\">\n" +
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
