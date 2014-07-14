module.exports = function(grunt) {
    // Load all task in the tasks director
    grunt.loadTasks('./tasks');

    // Project configuration
    grunt.initConfig({
        showTargetFiles: {
            basicFormat: {
                src: ['src/a.js', 'src/b.js'],
                dest: 'dest/ab.js'
            },
            regexFormat: {
                src: 'src/{a,c}.js',
                dest: 'dest/ac.js'
            },
            arrayFormat: {
                files: [
                    {src: 'src/{a,b}.js', dest: 'dest/ab.js'},
                    {src: 'src/{x,y}.js', dest: 'dest/xy.js'}
                ]
            },
            objectFormat: {
                files: {
                    'dest/abc.js': 'src/{a,b,c}.js',
                    'dest/xyz.js': 'src/{x,y,z}.js'
                }
            },
            destinationExpandedFormat: {
                expand: true,
                cwd: 'src/',
                src: '*.js',
                dest: 'dest/',
                ext: '.min.js'
            }
        }
    });

    // Define the default task
    grunt.registerTask('default', ['showTargetFiles']);
};