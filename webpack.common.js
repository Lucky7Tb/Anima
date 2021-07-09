const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                 test: /\.(png|svg|jpg|gif)$/,
                 use: [
                   'file-loader',
                 ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true,
        }),
        new WebpackPwaManifest({
            name: 'Anima Apps',
            short_name: 'Anima',
            description: 'Aplikasi Jadwal Anime dan Manga',
            display: "fullscreen",
            start_url: "/index.html",
            background_color: "#29b6f6",
            theme_color: "#29b6f6",
            icons: [
                {
                    src: path.resolve("./src/assets/image/AnimaLogoPWA.png"),
                    sizes: "512x512",
                    type: "image/png"
                }
            ]
        })
    ]
};