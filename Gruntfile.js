module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            dev: {
                options: {
                    paths: ["less"]
                },
                files: {
                    "public/static/css/main.css": [
                        "less/normalize.css",
                        "less/main.less"
                    ]
                }
            },
            prod: {
                options: {
                    paths: ["less"],
                    compress: true
                },
                files: {
                    "public/static/css/main.css": [
                        "less/normalize.css",
                        "less/main.less"
                    ]
                }
            }
        },
        bower_concat: {
            dev: {
                dest: 'js/vendor/vendor.js',
                bowerOptions: {
                    relative: false
                }
            }
        },
        uglify: {
            dev: {
                options: {
                    beautify: {
                        width: 80,
                        beautify: true
                    }
                },
                files: {
                    'public/static/js/main.js': [
                        'js/vendor/vendor.js',
                        'js/src/main.js'
                    ]
                }
            },
            prod: {
                files: {
                    'public/static/js/main.js': [
                        'js/vendor/vendor.js',
                        'js/src/main.js'
                    ]
                }
            }
        },
        concat: {
            dev: {
                files: {
                    'public/static/js/main.js': [
                        'js/vendor/vendor.js',
                        'js/src/main.js'
                    ]
                }
            }
        },
        watch: {
            js: {
                files: ['js/src/*'],
                tasks: ['concat:dev'],
                options: {
                    spawn: false
                }
            },
            less: {
                files: ['less/*'],
                tasks: ['less']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('dev', ['less:dev', 'bower_concat', 'concat:dev']);
    grunt.registerTask('prod', ['less:prod', 'bower_concat', 'uglify:prod']);
};
