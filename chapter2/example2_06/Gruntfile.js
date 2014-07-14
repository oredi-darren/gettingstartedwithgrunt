module.exports = function(grunt) {
    // Load all task in the tasks director
    grunt.loadTasks('./tasks');

    // Project configuration
    grunt.initConfig({
        stringCheck: {
            file: './src/app.js',
            string: 'console.log('
        }
    });

    // Define the default task
    grunt.registerTask('default', ['stringCheck']);
};