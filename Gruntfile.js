module.exports = function (grunt) {
    grunt.initConfig({
        'octo-pack': {
            prodNoFolderZip: {
                options: {
                    dst: './bin',
                    type: 'zip'
                },
                src: ['**/*.txt'],
                cwd: 'dist'
            },
            prodNoFolderGZip: {
                options: {
                    dst: './bin',
                    type: 'targz'
                },
                src: ['**/*.txt'],
                cwd: 'dist'
            },
            prodFolderGZip: {
                options: {
                    dst: './bin',
                    type: 'targz'
                },
                src: ['dist/*.txt']
            },
            prodFolderGZip: {
                options: {
                    dst: './bin',
                    type: 'targz'
                },
                src: ['dist/*.txt']
            }
        }
    });


    grunt.loadNpmTasks('@octopusdeploy/grunt-octo');

    grunt.registerTask('default', ['octo-pack:prodNoFolderZip']);
};