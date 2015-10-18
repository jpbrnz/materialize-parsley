# Basic starter web package using Materialize, jQuery, ParsleyJS.

### A simple homepage, landing page grid, contact form, and product cards.

This package scaffolds out a basic webapp using [Gulp](http://gulpjs.com/), [Materialize](http://materializecss.com/), [ParsleyJS](http://parsleyjs.org/).

#### Features
![Logo](docs/assets/gulp.png)
![Logo](docs/assets/sass.png)
![Logo](docs/assets/bower.png)
![Logo](docs/assets/karma.png)
![Logo](docs/assets/browsersync.png)
![Logo](docs/assets/jasmine.png)
![Logo](docs/assets/babel.png)

Please see [gulpfile](gulpfile.babel.js) for information on tasks, and settings.

Some features include:
* CSS Autoprefixing
* Built-in preview server with BrowserSync
* Image optimization
* Automagically wire-up dependencies installed with [Bower](http://bower.io)
* The gulpfile makes use of [ES2015 features](https://babeljs.io/docs/learn-es2015/) by using [Babel](https://babeljs.io)

#### Requirements

You must have Node.js and bower installed.

#### Installation

Clone repo (or download zip from GitHub)
```
git clone https://github.com/jpbrnz/materialize-parsley.git Materialize
cd Materialize
```

Type the following to install package dependencies

```    
npm install
bower install
```
To review while developing, updating type

```    
gulp serve
```
To build the final web package minimized and gziped type

```    
gulp build
```

#### This is a simple project for quickly building and launching micro sites using Materialize

### Credits:
[Yeoman gulp-webapp generator](https://github.com/yeoman/generator-gulp-webapp) - A gulp.js generator for modern webapps,
[Gulp](http://gulpjs.com/), [Materialize](http://materializecss.com/), [ParsleyJS](http://parsleyjs.org/)
