const gulp = require('gulp')
gulp.task('copy', () => {//将其他文件复制到dist目录下
    return gulp.src(['src/**/*.*', '!src/**/*.ts', '!src/**/*.js']).pipe(gulp.dest('dist'))
})