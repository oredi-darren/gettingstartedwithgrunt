module.exports = function(grunt) {
    grunt.registerTask('build', function () {
        console.log('building....')
    });

    grunt.registerTask('test', function () {
        console.log('testing....')
    });

    // Define the default task
    grunt.registerTask('default', ['build', 'test'])
};