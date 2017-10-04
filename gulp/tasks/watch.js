const gulp = require('gulp');
const watch = require('gulp-watch');
const BrowserSync = require('browser-sync').create();

gulp.task('watch', ()=> {
    BrowserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
});

watch('./src/**/*.pug',()=> {
    gulp.start('PugChanged');
});

watch('./src/**/*.scss',()=> {
    gulp.start('CssInject');
});

gulp.task('PugChanged',['pugRender'],()=> {
    browserSync.reload();
});

gulp.task('CssInject',['style'],()=> {
    gulp.src('./src/dist/styles.css')
    .pipe(BrowserSync.stream());
});