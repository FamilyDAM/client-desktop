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

'use strict';

var Rx = require('rx');
//di              = require('di');

// Logged in user
var PreferenceStore = require("./PreferenceStore");


module.exports = {

    _user : {"token" : "Basic YWRtaW46YWRtaW4="},

    getUser: function () {
        return this._user;
    },

    setUser: function (user_) {
        this._user = user_;
    },


    /**
     * Login a single user
     * @param _username
     * @param _password
     * @returns {*}
     */
    login: function (_username, _password) {

        return Rx.Observable.defer(function ()
        {
            var _salt = new Date().getTime();
            return $.post(PreferenceStore.getBaseUrl() +'/api/users/login',
                {'username':_username, 'password':_password, 'salt':_salt});
        });
    },

    /**
     * Get a list of all users, for the login screen
     * @returns {*}
     */
    listUsers: function () {

        var listUserObservable = Rx.Observable.defer(function () {
            return $.get(PreferenceStore.getBaseUrl() +'/api/users', {cache: false});
        }).map(function(results){
            var list = [];
            results.map(function(item){
                item.firstName = item.username;
                list.push(item);
            });
            return list.sort(function (a, b) { return b.username - a.username; });
        });
        return listUserObservable;

    },


};

//di.annotate(AuthActions, new di.Inject());


