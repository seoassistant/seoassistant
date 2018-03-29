var path = path = require("path");

module.exports = {
    entry: path.join(__dirname, "src", "seoassistant","seoassistant.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "seoassistant.js"
    }
};