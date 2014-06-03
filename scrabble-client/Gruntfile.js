module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    'lib/jquery.js',
                    'lib/underscore.js',
                    'lib/backbone.js',
                    'lib/backbone-localstorage.js',
                    'src/**/*.js'
                ],
                dest: 'build/js/scrabble-client.js'
            }
        },
        uglify: {
            options: {
                report: 'min'
            },
            dist: {
                files: {
                    'build/js/scrabble-client.min.js': [
                        'build/js/scrabble-client.js'
                    ]
                }
            }
        },
        processhtml: {
            dist: {
                options: {
                    process: true,
                    data: {
                        title: 'Lrnk Scrabble',
                        message: 'I wonder where this message shows up'
                    }
                },
                files: {
                    'build/index.html': ['src/index.html']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-processhtml');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify', 'processhtml']);

};