const path = require('path');
const gulp = require('gulp');
const buildSkin = require('gulp-build-skin');
const argv = require('yargs').argv;
const configFile = typeof argv.c !== "undefined" ? path.resolve(argv.c) : path.resolve(__dirname,"../skin.config.json");
const skinConfig = require(configFile);
const config = Object.assign({},skinConfig,argv);

module.exports = function() {
    return buildSkin(config)
        .pipe(gulp.dest(config.skinTarget))
    ;
}
