module.exports = function(grunt){
  //configuration video#4 - Grunt JS Tutorial #4 - Adding a Plugin (concatenating files) -
  grunt.initConfig({
    //pass in options to plugins, references....
    concat: {
      options: {
      stripBanners: true,
      banner:
        '/* Grunt concat file - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },

      js: {
        src: ['js/*.js'],
        dest: 'build/scripts.js'
      },

      css: {
        src: ['css/*.css'],
        dest: 'build/styles.css'
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          src: ['build/*.css', '!*.min.css'],
          dest: 'build/release',
          ext: '.min.css'
        }]
      }
    },

    uglify: {
      my_target: {
        files: {
          'dest/output.min.js': ['build/test.js']
        }
      }
    }
  });


  grunt.registerTask('concat-js', ['concat:js']);
  grunt.registerTask('concat-css', ['concat:css'])
  grunt.registerTask('all', ['concat:js', 'concat:css', 'cssmin'])

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
