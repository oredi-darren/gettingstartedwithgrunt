module.exports = function(grunt) {
    // Load the plugin that provides the "jshint" task.
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Project configuration
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            target1: 'src/**/*.js'
        }
    });

    // A new task to make jshint optional by calling it programmatically if the config file is present
    grunt.registerTask('check', function () {
        if(grunt.file.exists('.jshintrc')) {
            grunt.task.run('jshint');
        }
    });
};