module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            files12: {
                files: {
                    'dest/file1.txt': 'src/file1.txt',
                    'dest/file2.txt': 'src/file2.txt'
                }
            },
            files34: {
                files: {
                    'dest/file3.txt': 'src/file3.txt',
                    'dest/file4.txt': 'src/file4.txt'
                }
            }
        }
    });

    grunt.registerMultiTask('copy', function () {
        var count = 0;
        this.files.forEach(function (file) {
            try {
                grunt.file.copy(file.src, file.dest);
                count++;
            } catch(ex) {
                grunt.fail.fatal(JSON.stringify(file) + ' not found.');
            }
        });
        grunt.log.writeln('Copied %d/%d files', count, this.files.length);
    });
};