module.exports = function (grunt) {

    grunt.initConfig({

        // Update config.files, commit and push
        bump: {
            options: {
                files: ['package.json', 'bower.json'],
                updateConfigs: [],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['-a'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'origin',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                prereleaseName: 'alpha'
            }
        }
    });

    grunt.loadNpmTasks('grunt-bump');
};