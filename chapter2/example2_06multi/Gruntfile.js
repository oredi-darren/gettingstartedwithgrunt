module.exports = function(grunt) {
    // Load all task in the tasks director
    grunt.loadTasks('./tasks');

    // Project configuration
    grunt.initConfig({
        stringCheck: {
            app: {
                options:{
                    file: './src/app.js',
                    string: 'console.log('
                }
            },
            util: {
                options:{
                    file: './src/util.js',
                    string: 'eval('
                }
            }
        }
    });

    // Define the default task
    grunt.registerTask('default', ['stringCheck:app', 'stringCheck:util']);
};