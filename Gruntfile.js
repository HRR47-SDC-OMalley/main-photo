const webpackConfig = require('./webpack.config.js');

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    build: {
      src: 'public/dist/bundle.js',
      dest: 'build/grunt_bundle.js',
    },
    webpack: {
      dev: Object.assign({ mode: 'development' }, webpackConfig),
      prod: Object.assign({ mode: 'production', stats: 'minimal' }, webpackConfig),
    },
  });
  grunt.loadNpmTasks('grunt-webpack');
  grunt.registerTask('default', ['webpack:dev']);
  grunt.registerTask('deploy', ['webpack:prod']);
};
