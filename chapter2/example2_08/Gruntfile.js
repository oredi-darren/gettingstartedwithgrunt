module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        foo: 'c',
        bar: 'b<%= foo %>d',
        bazz: 'a<%= bar %>e'
    });

    // Define the default task
    grunt.registerTask('default', function () {
        grunt.log.writeln(grunt.config.get('bazz'));
    });
};