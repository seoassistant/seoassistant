var path = path = require("path");

module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel",
            query: {
                presets: ["es2015"]
            }
        }],
    },
    entry: path.join(__dirname, "src", "seoassistant","seoassistant.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "seoassistant.js"
    }
};