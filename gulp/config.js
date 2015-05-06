
var srcDir = './app';
var destDir = './public';
var isProduction = process.env.NODE_ENV === 'production';
var version = require('../package.json').version;

module.exports = {

    global: {
        srcDir: srcDir,
        destDir: destDir,
        isProduction: isProduction
    },

    clean: {
        dirs: [destDir]
    },

    copy: {
        src: ['images/**/*', 'fonts/**/*'],
        base: './app',
        cwd: './app/**'
    },

    copyJsVendor: {
        srcDir: srcDir + '/jsx/vendors/**/*',
        destDir: destDir + '/js/vendors/'
    },

    s3: {
        key: '----',
        secret: '----',
        bucket: 'wand-website'
    }

};
