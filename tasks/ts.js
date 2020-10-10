const path = require('path')
const gulp = require('gulp')
const tsGulp = require('gulp-typescript')
const merge = require('merge2')

module.exports = function(projectDir, outDir, extraTsConfig) {
  const tsProject = tsGulp.createProject(
    path.resolve(projectDir, 'tsconfig.json'),
    extraTsConfig
  )
  const tsResult = tsProject.src().pipe(tsProject())
  return merge([
    tsResult.js.pipe(gulp.dest(outDir)),
    tsResult.dts.pipe(gulp.dest(outDir))
  ])
}
