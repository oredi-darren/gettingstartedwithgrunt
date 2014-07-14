/**
 * Created by dseet on 7/14/2014.
 */
module.exports = function(grunt) {
    // registerMultiTask is required to use options override
    grunt.registerMultiTask('stringCheck', function () {
        var options = this.options();
        // fail if options are not provided
        if(!options.file) {
            grunt.fail.fatal('options settings requires a file property');
        }

        if(!options.string) {
            grunt.fail.fatal('options settings requires a string property');
        }

        // retrieve the file
        var contents = grunt.file.read(options.file);
        // search for console.log statements
        if(contents.indexOf(options.string) >= 0) {
            grunt.fail.warn('"' + options.string + '" found in "app.js"')
        }
    });
};
