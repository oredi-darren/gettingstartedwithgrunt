/**
 * Created by dseet on 7/14/2014.
 */
module.exports = function(grunt) {
    grunt.registerTask('stringCheck', function () {
        // fail if configuration is not provided
        grunt.config.requires('stringCheck.file');
        grunt.config.requires('stringCheck.string');

        // retrieve the filename [eg. './src/app.js'] and load it
        var file = grunt.config('stringCheck.file');
        var contents = grunt.file.read(file);

        // retrieve the string to search for [eg. 'console.log(']
        var string = grunt.config('stringCheck.string');
        // search for console.log statements
        if(contents.indexOf(string) >= 0) {
            grunt.fail.warn('"' + string + '" found in "app.js"')
        }
    });
};
