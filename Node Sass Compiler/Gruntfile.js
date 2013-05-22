module.exports = function ( grunt ) {

	// set up grunt
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// The directory where we put our docs
		distdir: 'docs',

		connect: {
			dev: {
				options: {
					port: 8001,
					// base: '/'
				}
			}
		},

		sass: {
			compile: {
				// options: {
	   //              includePaths: [
	   //                  'components/bourbon/'
	   //              ]
	   //          },
				files: {
					'css/main.css': 'css-src/main.scss'
				}
			}
		},

		watch: {
			options: {
				livereload: true,
			},
			sass: {
				files: ['css-src/**/*.scss'],
				tasks: ['sass'],
				options: {
					nospawn: true,
					// livereload: false
				}
			},
			css: {
				files: ['css/*.css'],
				options: {
					// livereload: 35729,
					nospawn: true
				}
			},
			html: {
				files: ['*.html'],
				options: {
					nospawn: true
				}
			}

		}

	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', [
		'connect',
		'watch'
	]);

};
