module.exports = function(grunt) {
    // Define the default task
    grunt.registerTask('foo', function () {
        grunt.log.writeln('My task "%s" has arguments %j', this.name, this.args);
    });
};