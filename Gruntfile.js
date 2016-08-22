module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('build', ['clean', 'jshint', 'copy:app', 'copy:splash', 'copy:app-configwizard', 'copy:repository']);
    grunt.registerTask('build-dev', ['build', 'watch']);
    //grunt.registerTask('build-electron', ['clean:binaryDist', 'electron']);



    var options = {
        port: 8081,
        app: "src",
        build: ".build-app",
        tmp: ".tmp",
        repoVersion: "0.1.0"
    };

    grunt.initConfig({
        options: options,
        pkg: grunt.file.readJSON('package.json'),


        watch: {
            dist: {
                files: '<%= options.build %>/**',
                tasks: ['copy:binary-dist'],
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
                        '.tmp'
                    ]
                }]
            },
            binaryDist: {
                files: [{
                    dot: true,
                    src: [
                        '.binary-dist'
                    ]
                }]
            }
        },



        copy: {
            app: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= options.app %>',
                    dest: '<%= options.build %>',
                    src: [
                        '*.js',
                        '**/*.json',
                        '*.{html,ico,png,txt}',
                        '**/*.css',
                        'resources/**/*',
                        '.htaccess'
                    ]
                }]
            },
            splash: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= options.app %>/apps',
                    dest: '<%= options.build %>/apps',
                    src: [
                        'splash/**/*'
                    ]
                }]
            },
            'app-configwizard': {
                files: [
                    {
                        cwd: '../app-configwizard/dist',
                        src: '**',
                        dest: './<%= options.build %>/apps/config',
                        expand: true
                    }
                ]
            },
            'repository': {
                files:[{
                    src: '../osgi-bundles/standalone/target/FamilyDAM-<%= options.repoVersion %>.jar',
                    dest: './<%= options.build %>/resources/',
                    expand: true,
                    flatten:true,
                    verbose:true
                }]
            },
            'binary-dist': {
                files: [
                    {
                        cwd: './<%= options.build %>/',
                        src: '**',
                        dest: './.binary-dist/FamilyDAM-darwin-x64/FamilyDAM.app/Contents/Resources/app/',
                        expand: true
                    }
                ]
            }
        },


        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                '<%= options.app %>*.js'
            ]
        }



    });

};
