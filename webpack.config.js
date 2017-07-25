const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'), // client-side javascript folder
    entry: [
        './app.js',
    ],
    output: {
        path: path.resolve(__dirname, './www/dist'),
        filename: 'bundle.js', // place where bundled app will be served
    },
    watch:true,
    module: {
        loaders: [{
            test: /\.jsx?$/, // search for js files 
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'] // use es2015 and react
            }
        }]
    },
    resolve: {   // Where Webpack look for files referenced by an import or require.
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
}