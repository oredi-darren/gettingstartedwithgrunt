module.exports = function(grunt) {
    // Environment specific tasks
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Project configuration
    grunt.initConfig({
        coffee: {
            build: {
                options: {
                    join: true
                },
                src: [
                    "src/scripts/**/*.coffee",
                    "!src/scripts/app.coffee",
                    "src/scripts/app.coffee"
                ],
                dest: "build/js/app.js"
            }
        },
        stylus: {
            options: {
                compress: false
            },
            build: {
                src: "src/styles/app.styl",
                dest: "build/css/app.css"
            }
        },
        jade: {
            build: {
                options: {
                    pretty: true
                },
                src: "src/views/app.jade",
                dest: "build/app.html"
            }
        },
        uglify: {
            compress: {
                src: "<%= coffee.build.dest %>",
                dest: "<%= coffee.build.dest %>"
            }
        },
        cssmin: {
            compress: {
                src: "<%= stylus.build.dest %>",
                dest: "<%= stylus.build.dest %>"
            }
        },
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: true,
                removeRedundantAttributes: true,
                removeOptionaltags: true
            },
            compress: {
                src: "<%= jade.build.dest %>",
                dest: "<%= jade.build.dest %>"
            }
        },
        watch: {
            scripts: {
                files: "src/scripts/**/*.coffee",
                tasks: "scripts"
            },
            styles: {
                files: "src/styles/**/*.styl",
                tasks: "styles"
            },
            views: {
                files: "src/views/**/*.jade",
                tasks: "views"
            }
        }
    });

    // Initialize environment
    var env = grunt.option('env') || 'dev';
    if(env === 'prod') {
        grunt.registerTask('scripts', ['coffee', 'uglify']);
        grunt.registerTask('styles', ['stylus', 'cssmin']);
        grunt.registerTask('views', ['jade', 'htmlmin']);
    } else {
        grunt.registerTask('scripts', ['coffee']);
        grunt.registerTask('styles', ['stylus']);
        grunt.registerTask('views', ['jade']);
    }


    grunt.registerTask('build', ['scripts', 'styles', 'views'])
    // Define the default task
    grunt.registerTask('default', ['build', 'watch'])
};
