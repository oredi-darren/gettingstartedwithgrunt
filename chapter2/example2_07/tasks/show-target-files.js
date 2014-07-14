/**
 * Created by dseet on 7/14/2014.
 */
module.exports = function(grunt) {
    // registerMultiTask is required to use options override
    grunt.registerMultiTask('showTargetFiles', function () {
        // Show the 'files' array
        this.files.forEach(function (file) {
            console.log('source: ' + file.src + '->' + 'destination: ' + file.dest);
        });
    });
};
