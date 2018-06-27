var gulp = require('gulp');
var del = require('del');
var jeditor = require('gulp-json-editor');
var argv = require('yargs').argv;

var config = {
    buildDir: 'dist/secure-feature-library/',
    deleteFolders: [
        'esm5',
        'esm2015',
        'fesm5',
        'fesm2015',
        'bundles/*.map',
        'bundles/*.umd.js',
        '*.tgz'
    ],
    deletePackage: [
        "module",
        "es2015",
        "esm5",
        "esm2015",
        "fesm5",
        "fesm2015"
    ],
    main: 'secure-feature-library.umd.min.js'
};

gulp.task('clean-lib', function() {
    var delPaths = [];
    config.deleteFolders.forEach((val) => {
        delPaths.push(config.buildDir + val);
    })
    delPaths.push(config.buildDir + 'bundles/*.map');
    delPaths.push(config.buildDir + 'bundles/*.umd.js');
    console.log('Deleting: ' + delPaths.join('\n'));
    return del(delPaths)
    .then((paths) => {
        if (paths.length > 0) {
            console.log('Deleted: ' + paths.join('\n'));
        } else {
            console.log('No matching paths found - nothing deleted.');
        }
    });
});

gulp.task('update-package', () => {
    return gulp.src(config.buildDir + 'package.json')
    .pipe(jeditor(function(json) {
        console.log('Updating' + config.buildDir + 'package.json');
        config.deletePackage.forEach((val) => {
            console.log('Deleting ' + val);
            delete json[val];
        });
        console.log('Updating main to ' + config.main);
        json['main'] = 'bundles/' + config.main;
        console.log('Finished updating ' + config.buildDir + 'package.json');
        return json;
    }))
    .pipe(gulp.dest(config.buildDir));
})