const gulp = require('gulp');
const sass = require('gulp-sass');
const SassImporter = require('sass-module-importer');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('style',()=> {
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({importer: SassImporter()}))
    .on('error', notify.onError((error)=> {
        return {
            title: 'Styles',
            message: error.message
        }
    }))
    .pipe(autoprefixer({
        browsers: "last 2 versions"
    }))
    
    .pipe(gulp.dest('./dist/'))
})