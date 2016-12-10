var config = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "/dist/bundle.js"
    },
    module: {
        loaders: []
    }
};

config.module.loaders.push({
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader?strictMath&noIeCompat"
    },
    {
        test: /\.pug/,
        loader: "pug-loader"
    });

module.exports = config;