/**
 * FLUX-Drive configuration.
 *
 * Please visit our Documentation at:
 * https://www.npmjs.com/package/flux-drive
 */

exports.config = {

    /**
     * General Settings
     */

    general: {
        // Session Secret key
        sessionKey: "9a3ee4bec5f18352eda29258cdc22ed2",
        clientProjectPermalink: "wand",
        hostAddress: "localhost:3000",
        allowRegistration: false
    },

    ///**
    // * Content API
    // */
    //
    //api: {
    //    enableContent: true,
    //    reactRouter: "/app/routes/routes.js",
    //    jsLayoutFile: "/app/templates/layout.js"
    //},

    /**
     * Database Settings (MongoDB)
     */

    db: {
        test: {
            name    : "wand-local",
            user    : false,
            password  : false,
            host    : "localhost",
            port    : 27017
        },
        development: {
            name    : "wand-local",
            user    : false,
            password  : false,
            host    : "localhost",
            port    : 27017
        },
        staging: {
            name    : "wand-local",
            user    : false,
            password  : false,
            host    : "localhost",
            port    : 27017
        },
        production: {
            name    : "wand-local",
            user    : false,
            password  : false,
            host    : "localhost",
            port    : 27017
        }
    },

    /**
     * CDN (Amazon S3)
     */

    cdn: {
        accessKeyId: "-------------------------------",
        secretAccessKey: "-------------------------------",
        bucket: "wand-website",
        cdnUrl: "//wand-website.s3.amazonaws.com/",
        assetsUrl: "//wand-website.s3.amazonaws.com/",
        maxFileSize: '15mb'
    },

    /**
     * Mailer Settings (Amazon SES)
     */

    mailer: {
        accessKeyId: "-------------------------------",
        secretAccessKey: "-------------------------------",
        sender: "no-reply@pillarstudio.com"
    },

};
