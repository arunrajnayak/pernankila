# Kellogg School of Business [RWD]

Responsive Redesign of [Kellogg's Full-Time MBA site](http://www.kellogg.northwestern.edu/programs/fulltimemba.aspx).

Requirements
------------

###NodeJS
Server-side JavaScript. Required for build process. [Download]('http://nodejs.org/download/')

###Bower
Dependency manager. Enter the following from the command line to install:
````
npm install -g bower
````
*May require `sudo` command*

###Grunt
Project build process (runs on NodeJS). Enter the following from the command line to install:
````
npm install -g grunt-cli
npm install -g grunt
````
*May require `sudo` command*

###Compass
SASS library/CSS pre-processor (requires [Ruby]('https://www.ruby-lang.org/en/downloads/')). Enter the following from the command line to install:
````
gem update --system
gem install compass
````

Project Setup
-------------
1. Inside the project's root directory, run `npm install && bower install`. The `npm install` command downloads and installs any additional node modules needed to run the Grunt tasks that are required for the build process - defined in **package.json**. The `bower install` command downloads all of the dependencies(ex. jQuery, Modernizr, etc) - defined in **bower.json**.
2. Launch the development server by running `grunt server` from the project's root directory. This should open a browser window at [http://localhost:9000]('http://localhost:9000') and reload the page any time a change is saved to any html, js, css/sass, or image within the **src** folder.

Development
-----------

###Styles
The main SASS file for the project is **sass/klg.styles.scss** all other SASS files (partials) are imported to this file.

All partials should be prefixed with and _. ex: ( _partialName ). They can be imported into the **klg.quickhits.scss** file by using `@import partialName` rule. The underscore does not need to be included when importing.

All global variables and mixins referenced throughout the various modules should be included in **sass/_base.scss**. 


### Directory Structure ###

For development we will be working within the **/src** and all output is placed within **/tmp** directory which is dynamically created when you run `grunt server`.

### Build Processes

#### Development

For development, running `grunt server` will launch the server at the default port of 9000 and will also compile all SASS files, copy all Javascript, and runs Assemble. 

Once the server is up and running at [http://localhost:9000]('http://localhost:9000') , any updates to the HTML, CSS, or JS that are saved within the **src/** directory will trigger a page refresh in any open browser accessing the server.

All of this is output to the **tmp/** directory which is considered to be the root during development.

#### Production

For production, running `grunt build` will run the assemble task for outputting all static html, copies all images and fonts to the **dist/** directory, concatenates and minifies all Javascript, and concatenates and minifies all CSS. 

All production code is output to the **dist/** directory.

#### Dev Handoff
For handoff to back-end dev, running `grunt release` will run the `grunt build` task and then create a ZIP archive within the **releases/** directory. The file will be named ***Kellogg_FED_{Current Date}.zip***. 

For the purposes of *CMS integration*, we are providing the [Assemble JS]('http://assemble.io') templates, partials, and data that is being used to create our front-end development environment. ***These are for reference only.***

All dev data is copied into **{ARCHIVE}/_DEV_Data/**.  

All dev templates and partials are copied into **{ARCHIVE}/_DEV_Templates/**.

