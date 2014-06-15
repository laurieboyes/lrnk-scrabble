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
            },
            clean: {
                default: {
                    src: ['../scrabble-server/scrabble/src/main/webapp/WEB-INF/scrabble'],
                    options: {
                        force: true
                    }}
            },
            copy: {
                files: {
                    cwd: 'build',  // set working folder / root to copy
                    src: '**/*',           // copy all files and subfolders
                    dest: '../scrabble-server/scrabble/src/main/webapp/WEB-INF/scrabble',    // destination folder
                    expand: true           // required when using cwd
                }
            }
        }
    )
    ;

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

// Default task(s).
    grunt.registerTask('default', ['concat', 'uglify', 'processhtml']);
    grunt.registerTask('deploy', ['concat', 'uglify', 'processhtml', 'clean', 'copy']);

}
;