module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      css: {
        files: ['assets/css/*.scss'],
        tasks: ['compass']
      },
      js: {
        files: ['assets/js/*.js', '!**/*.min.js'],
        tasks: ['uglify']
      },
      bower: {
        files: ['bower.json'],
        tasks: ['bower']
      }
    },

    compass: {
      main: {
        options: {
          sassDir: 'assets/css',
          cssDir:  'assets/css',
          outputStyle: 'compressed',
          imagesDir:  'assets/images',
          imagesPath: 'assets/images'
        }
      }
    },

    uglify: {
      main: {
        options: {
          mangle: false,
          sourceMap: 'assets/js/main.min.map',
          sourceMapRoot: '/'
        },
        files: {
          'assets/js/main.min.js': ['assets/js/main.js']
        }
      }
    },

    bower: {
      install: {
        options: {
          targetDir: 'assets/libs',
          layout: 'byComponent',
          install: true,
          verbose: true,
          cleanTargetDir: true,
          cleanBowerDir: false
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'assets/js/*.js', '!assets/js/*.min.js']
    }

  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['bower', 'compass', 'jshint', 'uglify', 'watch']);

};