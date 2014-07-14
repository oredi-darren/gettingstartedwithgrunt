module.exports = function(grunt) {
    // grunt foo returns "bar is: undefined"
    // grunt foo --bar returns "bar is: true"
    // grunt foo --bar=42 returns "bar is: 42"

    console.log('bar is: ' + grunt.option('bar'));
    grunt.registerTask('foo', function () {

    });
};