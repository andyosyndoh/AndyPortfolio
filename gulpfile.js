// node.js Packages / Dependencies
const gulp          = require('gulp');
const sass          = require('gulp-sass')(require('sass'));
const uglify        = require('gulp-uglify');
const rename        = require('gulp-rename');
const concat        = require('gulp-concat');
const cleanCSS      = require('gulp-clean-css');
const imageMin      = require('gulp-imagemin');
const pngQuint      = require('imagemin-pngquant'); 
const browserSync   = require('browser-sync').create();
const autoprefixer  = require('gulp-autoprefixer');
const jpgRecompress = require('imagemin-jpeg-recompress'); 
const clean         = require('gulp-clean');
const replace       = require('gulp-replace');


// Paths
var paths = {
    root: {
        www:        '.'
    },
    src: {
        root:       'assets',
        html:       '*.html',
        css:        'assets/css/*.css',
        js:         'assets/js/*.js',
        vendors:    'assets/vendors/**/*.*',
        imgs:       'assets/imgs/**/*.+(png|jpg|gif|svg)',
        scss:       'assets/scss/**/*.scss',
        nodemodules:    'node_modules/**/*.*'
    },
    dist: {
        root:       'dist',
        css:        'dist/css',
        js:         'dist/js',
        imgs:       'dist/imgs',
        vendors:    'dist/vendors',
        nodemodules:    'dist/node_modules'
    }
}

// Compile SCSS
gulp.task('sass', function() {
    return gulp.src(paths.src.scss)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) 
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.src.root + '/css'))
    .pipe(browserSync.stream());
});

// Minify + Combine CSS
gulp.task('css', function() {
    return gulp.src(paths.src.css)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(replace('../fonts', '../vendors/themify-icons/fonts'))
    .pipe(concat('johndoe.css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.dist.css))
});

// Minify + Combine JS
gulp.task('js', function() {
    return gulp.src(paths.src.js)
    .pipe(uglify())
    .pipe(concat('johndoe.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.dist.js))
    .pipe(browserSync.stream());
});

// Compress (JPEG, PNG, GIF, SVG, JPG)
gulp.task('img', function(){
    return gulp.src(paths.src.imgs)
    .pipe(imageMin([
        imageMin.gifsicle(),
        imageMin.jpegtran(),
        imageMin.optipng(),
        imageMin.svgo(),
        pngQuint(),
        jpgRecompress()
    ]))
    .pipe(gulp.dest(paths.dist.imgs));
});

// copy vendors to dist
gulp.task('vendors', function(){
    return gulp.src(paths.src.vendors)
    .pipe(gulp.dest(paths.dist.vendors))
});

gulp.task('html', function(){
    return gulp.src(paths.src.html)
    .pipe(replace('assets/css/johndoe.css', 'css/johndoe.min.css'))
    .pipe(replace('assets/js/johndoe.js', 'js/johndoe.min.js'))
    .pipe(replace(/assets\//g, ''))
    .pipe(gulp.dest(paths.dist.root))
});

// clean dist
gulp.task('clean', function () {
    return gulp.src(paths.dist.root)
        .pipe(clean());
});

gulp.task('nodemodules', function(){
    return gulp.src(paths.src.nodemodules)
    .pipe(gulp.dest(paths.dist.nodemodules))
});

// Prepare all assets for production
gulp.task('build', gulp.series('clean', 'sass', 'css', 'js', 'vendors', 'img', 'html', 'nodemodules'));

// Watch (SASS, CSS, JS, and HTML) reload browser on change
gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: paths.root.www
        },
        port: 3000,
        open: true
    })
    gulp.watch(paths.src.scss, gulp.series('sass'));
    gulp.watch(paths.src.js).on('change', browserSync.reload);
    gulp.watch(paths.src.html).on('change', browserSync.reload);
});

// Default task
gulp.task('default', gulp.series('sass', 'watch'));