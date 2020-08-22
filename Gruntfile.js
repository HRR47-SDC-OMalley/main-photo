const webpackConfig = require('./webpack.config.js');

module.exports = function (grunt) {
  grunt.initConfig({
    aws: grunt.file.readJSON('aws-access.json'),
    pkg: grunt.file.readJSON('package.json'),
    s3: {
      options: {
        accessKeyId: '<%= aws.accessKeyId %>',
        secretAccessKey: '<%= aws.secretKey %>',
        bucket: '<%= aws.bucket %>',
      },
    build: {
      src: 'public/dist/bundle.js',
      dest: 'build/main-photo.bundle.js',
    },
    webpack: {
      dev: Object.assign({ mode: 'development' }, webpackConfig),
      prod: Object.assign({ mode: 'production', stats: 'minimal' }, webpackConfig),
    },
  });

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-aws');
  grunt.registerTask('default', ['webpack:dev']);
  grunt.registerTask('upload', ['webpack:prod', 's3']);
};
