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
 * Define the different Angular services for this module.
 */
module.exports = angular.module('familydam.services', [])
    .service('appService', require('./AppService'))
    .service('authService', require('./AuthService'))
    .service('loginService', require('./LoginService'))
    .service('importService', require('./ImportService'))
    .service('directoryService', require('./DirectoryService'))
    .service('searchService', require('./SearchService'))
    .service('contentService', require('./ContentService'))

    .factory("transformRequestAsFormPost", function() {
    // I provide a request-transformation method that is used to prepare the outgoing
    // request as a FORM post instead of a JSON packet.

            // I prepare the request data for the form post.
            function transformRequest( data, getHeaders ) {
                var headers = getHeaders();
                headers[ "Content-Type" ] = "application/x-www-form-urlencoded; charset=utf-8";

                return( serializeData( data ) );
            }

            // ---
            // PRVIATE METHODS.
            // ---


            // I serialize the given Object into a key-value pair string. This
            // method expects an object and will default to the toString() method.
            // --
            // NOTE: This is an atered version of the jQuery.param() method which
            // will serialize a data collection for Form posting.
            // --
            // https://github.com/jquery/jquery/blob/master/src/serialize.js#L45
            function serializeData( data ) {

                // If this is not an object, defer to native stringification.
                if ( ! angular.isObject( data ) ) {
                    return( ( data == null ) ? "" : data.toString() );
                }

                var buffer = [];

                // Serialize each key in the object.
                for ( var name in data ) {
                    if ( ! data.hasOwnProperty( name ) ) {
                        continue;
                    }
                    var value = data[ name ];
                    buffer.push(
                        encodeURIComponent( name ) +
                        "=" +
                        encodeURIComponent( ( value == null ) ? "" : value )
                    );
                }

                // Serialize the buffer and clean it up for transportation.
                var source = buffer
                        .join( "&" )
                        .replace( /%20/g, "+" );

                return( source );
            }


            // Return the factory value.
            return( transformRequest );


    });
