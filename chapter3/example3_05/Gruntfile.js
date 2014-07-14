var request = require('request');
var url = 'https://raw.githubusercontent.com/oredi/gettingstartedwithgrunt/master/README.md';
module.exports = function(grunt) {
    grunt.registerTask('webget', function () {
        var done = this.async();
        request(url, function (err, response, contents) {
            if(err) {
                done(err);
            } else if(response.statusCode !== 200) {
                done(new Error('Not OK'));
            } else {
                grunt.file.write('FILE.md', contents);
                grunt.log.ok('FILE.md successfully created');
                done();
            }
        });
    });
};