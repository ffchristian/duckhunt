var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var scss = require('postcss-scss');
var input = './src/sass/**/*.scss';
var output = './src/css';
var sassOptions = {
    outputStyle: 'expanded'
};
gulp.task('sass', function() {
    var processors = [
        autoprefixer({
            map: true,
            browsers: ['Chrome > 5']
        })
    ];
    gulp
        .src(input)
        .pipe(postcss(processors, { syntax: scss }))
        .pipe(sass(sassOptions).on('error', error))
        .pipe(gulp.dest(output));
});
gulp.task('default', function() {
    gulp.watch(input, ['sass']).on('error', error);
})

function error(e) {
    console.log(e.toString())
    this.emit('end')

}
