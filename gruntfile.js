require('quiet-grunt');
module.exports = function(grunt) {
  const sass = require('node-sass');

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    spritemakersvg: {
      options: {},
      files: {
        'build/sprites/sprite.svg': ['vectors/*.svg'],
      },
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    image: {
      static: {
        options: {
          optipng: false,
          pngquant: true,
          zopflipng: true,
          jpegRecompress: false,
          mozjpeg: true,
          guetzli: false,
          gifsicle: true,
          svgo: true
        }
      },
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['*.{png,jpg,gif}'],
          dest: 'img/'
        }]
      }
    },
    cmq: {
      options: {
        log: true
      },
      dynamic: {
        expand: false,
        src: ['build/css/*.css'],
        dest: 'build/css'
      },
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 11', 'Opera 12.1']
      },
      dist: {
        src: 'build/css/styles.css',
        dest: 'build/css/styles.css'
      }
    },
    cssmin: {
      my_target: {
        src: 'build/css/styles.css',
        dest: 'build/css/styles.css'
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/*.js'],
        dest: 'build/js/scripts.js',
      },
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'build/js/scripts.js': ['build/js/scripts.js']
        }
      }
    },
    obfuscator: {
      files: [
        'build/js/scripts.js'
      ],
      entry: 'build/js/scripts.js',
      out: 'build/js/scripts-obs.js',
      strings: true,
      root: __dirname
    },
    concurrent: {
        compile: ['compass', 'concat'],
        compatibility: ['autoprefixer'],
        optimize: ['image', 'cmq', 'cssmin', 'uglify'],
        secure: ['obfuscator'],
        report: [],
    },
    notify: {
      cssmin:{
        options:{
          title: "CSS",
          message: "Files have been compiled successfully"
        }
      },
      uglify:{
        options:{
          title: "Javascript",
          message: "Files have been compiled successfully"
        }
      },
    },
    watch: {
      scripts: {
          files: ['js/**/*.js'],
          tasks: ['concat', 'uglify', 'obfuscator', 'notify:uglify'],
          options: {
              spawn: false,
              livereload: {
                port: 35730,
                host: 'localhost'
              }
          },
      },
      images: {
          files: ['img/*.{png,jpg,gif}'],
          tasks: ['image']
      },
      css: {
          files: ['scss/**/*.scss'],
          tasks: ['compass', 'cmq', 'autoprefixer', 'cssmin', 'notify:cssmin'],
          options: {
            livereload: {
              port: 35730,
              host: 'localhost'
            }
          },
      }
    }
  });

  grunt.loadNpmTasks('grunt-spritemaker-svg');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-image');
  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-obfuscator');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concurrent:compile', 'concurrent:compatibility', 'concurrent:optimize', 'concurrent:secure', 'concurrent:report']);
}
