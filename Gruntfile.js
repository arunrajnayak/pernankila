/*
 * Generated on 2014-05-05
 * generator-assemble v0.4.11
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2014 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

    // show elapsed time at the end
    require('time-grunt')(grunt);

    // load all grunt tasks
    require('load-grunt-tasks')(grunt, {
        pattern : ['grunt-*', 'assemble']
    });

    // Project configuration.
    grunt.initConfig({

        config: {
            src: 'src',
            dist: 'docs',
            tmp: 'tmp',
            bower: 'bower_components'
        },

        watch: {
            assemble: {
                files: ['<%= config.src %>/{content,data,templates,ajax}/**/{,*/}*.{md,hbs,yml,json}'],
                tasks: ['assemble:dev']
            },
            scripts: {
                files: ['<%= config.src %>/{scripts,json}/**/*','<%= config.bower %>/**/*.js'],
                tasks: ['copy:dev']
            },
            compass: {
                files: ['<%= config.src %>/sass/**/*.{scss,sass}'],
                tasks: ['compass:dev']
            },
            images: {
                files: [
                    '<%= config.src %>/images/**/*.*',
                    '<%= config.src %>/media/**/*.*',
					'<%= config.src %>/media/*.*'
                ],
                tasks: ['copy:dev']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.tmp %>/{,*/}*.html',
                    '<%= config.tmp %>/styles/**/*.css',
                    '<%= config.tmp %>/{,*/}*.js',
                    '<%= config.tmp %>/{,*/}*.json',
                    '<%= config.tmp %>/{,*/}*.{png,jpg,jpeg,gif}'
                ]
            },
        },

        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            dev: {
                options: {
                    port: 99,
                    open: true,
                    base: [
                        '<%= config.tmp %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= config.dist %>'
                }
            }
        },

        assemble: {
            dev: {
                options: {
                    flatten: true,
                    assets: '<%= config.tmp %>',
                    layout: 'home.hbs',
                    layoutdir: '<%= config.src %>/templates/layouts',
                    data: '<%= config.src %>/data/*.{json,yml}',
                    partials: '<%= config.src %>/templates/partials/**/*.hbs'
                },
                files: {
                    '<%= config.tmp %>/': ['<%= config.src %>/templates/pages/*.hbs']
                }
            },
            prod : {
                options: {
                    flatten: true,
                    assets: '<%= config.dist %>',
                    layout: 'home.hbs',
                    layoutdir: '<%= config.src %>/templates/layouts',
                    data: '<%= config.src %>/data/*.{json,yml}',
                    partials: '<%= config.src %>/templates/partials/**/*.hbs'
                },
                files: {
                    '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
                }
            }
        },

        compass: {
            dev: {
                options: {
                    sassDir: ['<%= config.src %>/sass'],
                    cssDir: ['<%= config.tmp %>/styles'],
                    environment: 'development',
                    generatedImagesDir: '<%= config.tmp %>/images',
                    imagesDir: '<%= config.src %>/images',
                    fontsDir: '<%= config.src %>/sass/global/fonts',
                    importPath: 'bower_components',
                    httpImagesPath: '/images',
                    httpGeneratedImagesPath: '/images',
                    httpFontsPath: '/fonts',
                    relativeAssets: false,
                    assetCacheBuster: false
                }
            },
            prod: {
                options: {
                    sassDir: ['<%= config.src %>/sass'],
                    environment: 'production',
                    importPath: 'bower_components',
                    httpImagesPath: '/images',
                    httpGeneratedImagesPath: '/images',
                    httpFontsPath: '/fonts',
                    relativeAssets: false,
                    assetCacheBuster: false,
                    noLineComments: true,
                    outputStyle: 'compact'
                }
            }
        },

        concat: {

            options: {
                banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */',
            },
            prod: {
                files: {
                    '<%= config.tmp %>/scripts/nmp-main.js': [
                        '<%= config.src %>/scripts/nmp-main.js',
                        '<%= config.src %>/scripts/plugins/*.js',
                        '!<%= config.src %>/scripts/handlebars_helpers.js'
                    ]
                }
            }
        },

        copy: {
            dev: {
                files: [
                    { expand: true, flatten: true, dest: '<%= config.src %>/images', src: ['bower_components/slick-carousel/slick/**.{gif,jpg}'] },
                    {
                        expand: true,
                        src: [
                            'bower_components/jquery/jquery.min.js',
                            'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
							'bower_components/handlebars/handlebars.min.js',
                            'bower_components/owlcarousel/owl-carousel/owl.carousel.min.js',
                            'bower_components/jquery-mousewheel/jquery.mousewheel.min.js',
                            'bower_components/jquery.inview/jquery.inview.min.js',
                            'bower_components/isotope/js/isotope.js',
                            'bower_components/smooth-scroll/smooth-scroll.min.js',
                            'bower_components/prettyphoto/js/jquery.prettyPhoto.js',
                            'bower_components/wowjs/dist/wow.min.js'
                        ],
                        dest: '<%= config.tmp %>'
                    },
                    {
                        expand: true,
                        cwd: '<%= config.src %>',
                        dest: '<%= config.tmp %>',
                        src: [
                            'favicon.ico',
                            'apple-touch-icon.png',
                            'videos/**/*',
                            'scripts/**/*.js'
                        ]
                    },
                    {
                        expand: true,
                        cwd: '<%= config.src %>/images/global',
                        dest: '<%= config.tmp %>/styles/images',
                        src: [
                           '*.*',
                        ]
                    },                                     
                    {
                        expand: true,
                        cwd: '<%= config.src %>/sass/global/fonts',
                        dest: '<%= config.tmp %>/styles/global/fonts',
                        src: [
                            '{,*/}*.*',
                            "!_fonts.scss"
                        ]
                    },
                    {
                        expand: true,
                        cwd: '<%= config.src %>/media',
                        dest: '<%= config.tmp %>/media',
                        src: [
                            '{,*/}*.*'
                        ]
                    },
                    {
                        expand: true,
                        cwd: '<%= config.src %>/ajax',
                        dest: '<%= config.tmp %>/ajax',
                        src: [
                            '{,*/}*.*'
                        ]
                    },
                    {
                        expand: true,
                        cwd: '<%= config.src %>/styles/',
                        dest: '<%= config.tmp %>/styles/global/',
                        src: [
                           '*.*',
                        ]
                    },
                    {
                        expand: true,
                        cwd: '<%= config.src %>/styles/fonts/',
                        dest: '<%= config.tmp %>/styles/fonts/',
                        src: [
                           '*.*',
                        ]
                    }
                ]
            },
            prod: {
                files: [ 
                    {
                        expand: true,
                        cwd: '<%= config.src %>',
                        dest: '<%= config.dist %>',
                        src: [
                            'favicon.ico',
                            'apple-touch-icon.png',
                            'videos/**/*'
                        ]
                    },
                    {expand: true, cwd: '<%= config.tmp %>/media', src: ['**/*.*'], dest: '<%= config.dist %>/media'},
					{expand: true, cwd: '<%= config.src %>/ajax' , src: ['**/*.*'], dest: '<%= config.dist %>/ajax'},
                    {expand: true, cwd: '<%= config.tmp %>/scripts' , src: ['**/*.*'], dest: '<%= config.dist %>/scripts'},
                    {expand: true, cwd: '<%= config.tmp %>/bower_components' , src: ['**/*.*'], dest: '<%= config.dist %>/bower_components'},
                    {expand: true, cwd: '<%= config.tmp %>/styles' , src: ['**/*.*'], dest: '<%= config.dist %>/styles'},
                    {expand: true, cwd: '<%= config.tmp %>/styles/global/fonts', src: ['**/*.*'], dest: '<%= config.dist %>/global/css/fonts'}
                ]
            },
            styles: {
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            dev : ['<%= config.tmp %>'],
            prod : ['<%= config.dist %>']
        },

        useminPrepare: {
            options: {
                dest: '<%= config.dist %>'
            },
            html: '<%= config.dist %>/index.html'
        },

        usemin: {
            options: {
                dirs: ['<%= config.dist %>']
            },
            html: ['<%= config.dist %>/{,*/}*.html']
        },

        cssmin: {
            prod: {
                files: [
                {'<%= config.tmp %>/styles/nmp-styles.css': ['<%= config.tmp %>/styles/nmp-styles.css']}
                ]
            }
        },

        imagemin: {
            prod: {
                options : {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.src %>/images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= config.dist %>/images'
                }]
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.tmp %>/styles/',
                    src: '{,*/}*.css',
                    dest: '<%= config.tmp %>/styles/'
                }]
            }
        },

        concurrent: {
            server: [
                'compass:dev',
                'copy:styles'
            ],
            prod: [
                'compass:prod',
                'copy:styles',
                'imagemin'
            ],
            werk: [
                'compass',
                'copy:styles'
            ]
        }

    });

    // All tasks
    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:dev',
            'copy:dev',
            'compass:dev',
            'assemble:dev',
            'connect:dev',
            'watch'
        ]);
    });

    grunt.registerTask('build', [
        'clean:prod',
        'assemble:prod',
        'useminPrepare',
        'copy:prod',
        'concurrent:prod',
        'concat:prod',
        'cssmin', 
        'usemin'
    ]);

    grunt.registerTask('default', [
        'clean:dev',
        'assemble:dev',
        'useminPrepare',
        'copy:dev',
        'concurrent:server',
        'concat:prod',
        'cssmin', 
        'usemin'
    ]);

};
