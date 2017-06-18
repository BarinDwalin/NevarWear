const gulp = require('gulp');
const lint = require('gulp-tslint');

gulp.task('tslint', () => {
  gulp.src(['./src/**/*.ts'])
  .pipe(lint({
    formatter: 'prose',
  }))
  .pipe(lint.report({
    emitError: true,
    reportLimit: 5,
  }));
});

gulp.task('default', ['tslint']);
