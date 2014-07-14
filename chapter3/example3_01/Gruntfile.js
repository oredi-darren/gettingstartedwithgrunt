var fs = require('fs');
module.exports = function(grunt) {
    // Define the default task
    grunt.registerTask('log-deploy', function () {
        var message = 'Deployment on ' + new Date();
        fs.appendFileSync('deploy.log', message + '\n')
        grunt.log.writeln('Appended "' + message + '"');
    });
};