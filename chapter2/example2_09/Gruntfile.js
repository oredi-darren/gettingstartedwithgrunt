module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        foo: ['a.js', 'b.js', 'c.js', 'd.js'],
        bazz: '<%= foo %>'
    });

    // Define the default task
    grunt.registerTask('default', function () {
        grunt.log.writeln(grunt.config.get('bazz'));
    });
};