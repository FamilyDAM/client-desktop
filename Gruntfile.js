module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['build', 'watch']);//, 'connect'

    grunt.registerTask('build', [
        'clean',  'build-css', 'browserify2:shared-lib', 'copy', 'build-js-dashboard', 'build-atom-shell-app'
    ]);

    grunt.registerTask('build-js-dashboard', ['jshint', 'react:dashboard', 'browserify2:dashboard']);
    grunt.registerTask('build-css', ['compass']);




    var options = {
        port: 8081,
        app: "src",
        dist: "dist",
        tmp: ".tmp"
    };

    grunt.initConfig({
        options: options,
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: options.port,
                    livereload: 35729,
                    base: '.'
                }
            }
        },

        open: {
            server: {
                path: 'http://localhost:<%= options.port %>/index.html'
            }
        },

        watch: {

            styles: {
                files: ['<%= options.app %>/apps/dashboard/**/*.scss'],
                tasks: ['compass:dashboard', 'newer:copy:dashboard' ],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['<%= options.app %>/apps/dashboard/**/*.css'],
                tasks: ['copy:dashboard'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['<%= options.app %>/apps/dashboard/**/*.js'],
                tasks: ['build-js-dashboard'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['<%= options.app %>/apps/dashboard/*.html'],
                tasks: ['newer:copy:dashboard'],
                options: {
                    livereload: true
                }
            },
            react: {
                files: '<%= options.app %>/apps/dashboard/**/*.jsx',
                tasks: ['build-js-dashboard'],
                options: {
                    livereload: true
                }
            }
,
            dist: {
                files: '<%= options.dist %>/**',
                tasks: ['copy:dist'],
                options: {
                    livereload: true
                }
            }

        },

        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        'binary-dist',
                        '<%= options.dist %>/*',
                        '!<%= options.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                '<%= options.app %>/apps/dashboard/{,*/}*.js',
                '!<%= options.app %>/apps/dashboard/bower_components/*',
                '!<%= options.app %>/apps/dashboard/stores/*.js',
                '!<%= options.app %>/apps/dashboard/actions/*.js',
                '!<%= options.app %>/apps/dashboard/shared-lib.js'
            ]
        },


        // ========================================
        // COMPASS
        // ========================================

        compass: {
            dashboard: {
                options: {
                    sassDir: '<%= options.app %>',
                    cssDir: '<%= options.dist %>',
                    debugInfo: true,
                    fontsDir: '<%= options.app %>/apps/dashboard/assets/fonts',
                    httpFontsPath: '<%= options.app %>/apps/dashboard/assets/fonts',
                    relativeAssets: false,
                    assetCacheBuster: false,
                    specify: [
                        '<%= options.app %>/apps/dashboard/*.scss',
                        '<%= options.app %>/apps/dashboard/modules/**/*.scss'
                    ]
                }
            }
        },

        copy: {
            app: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= options.app %>',
                    dest: '<%= options.dist %>',
                    src: [
                        '*.js',
                        '**/*.json',
                        'apps/splash/**'
                    ]
                }]
            },
            dashboard: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= options.app %>/apps/dashboard',
                    dest: '<%= options.dist %>/apps/dashboard',
                    src: [
                        '*.{html,ico,png,txt}',
                        '**/*.css',
                        'assets/**/*',
                        'bower_components/**/*',
                        '.htaccess'
                    ]
                }]
            },
            'dist': {
                files: [
                    {
                        cwd: './dist/',
                        src: '**',
                        dest: './binary-dist/darwin/atom-shell/Atom.app/Contents/Resources/app/',
                        expand: true
                    }
                ]
            },
        },

        react: {
            options:{
                'options.harmony': true
            },
            dashboard: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= options.app %>/apps/dashboard',
                        src: ['**/*.jsx', 'assets/js/*.js', 'stores/*.js', 'actions/**/*.js', 'services/**/*.js'],
                        dest: '<%= options.tmp %>/apps/dashboard',
                        ext: '.js'
                    }
                ]
            }
        },

        "6to5": {
            options: {
                sourceMap: true
            }
        },

        browserify2: {
            'dashboard': {
                entry: './<%= options.tmp %>/apps/dashboard/app.js',
                compile: './<%= options.dist %>/apps/dashboard/app.js',
                debug: true
            },
            'shared-lib': {
                entry: './<%= options.app %>/apps/dashboard/shared-lib.js',
                compile: './<%= options.dist %>/apps/dashboard/shared-lib.js',
                debug: true
            }
        },


        'download-atom-shell': {
            version: '0.20.2',
            outputDir: '.tmp/binaries'
        },

        /** platforms: ["darwin", "win32", "linux"], **/
        'build-atom-shell-app': {
            options: {
                platforms: ["darwin"],
                app_dir:"dist",
                cache_dir:".tmp/binaries",
                build_dir:"binary-dist",
                atom_shell_version: 'v0.20.2'
            }
        }

    });

};