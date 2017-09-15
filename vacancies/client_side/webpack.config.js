const webpack = require('webpack');

module.exports = {
    entry : './public/js/app.js',
    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js'
    }
};


