const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./jsonSchemaLib/js/JS_Main.js",
    output: {
        filename: "content.js",
        path: path.resolve(__dirname, "./dist")
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader, "css-loader"
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "content.css"
        })
    ]
}