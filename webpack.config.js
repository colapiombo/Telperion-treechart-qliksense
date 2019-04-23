const path = require('path');
// Application configuration
const pkg = require('./package.json');

const config =  {
    // https://webpack.js.org/configuration/entry-context/
    context: getRelativePath(pkg.directoryName.src),
    // https://webpack.js.org/concepts/entry-points/
    entry: `../${pkg.fileName.main}`,
    // https://webpack.js.org/concepts/output/
    output: {
        path: getRelativePath(pkg.directoryName.dist),
        filename: pkg.fileName.bundle,
    },
    // https://webpack.js.org/guides/development/
    mode: 'development',
    devtool: 'inline-source-map',
    // https://webpack.js.org/configuration/resolve/
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    watch: true,
    // https://webpack.js.org/concepts/targets/
    target: 'node',
    //https://webpack.js.org/configuration/node/
    node: { process: false },
    module: {
        rules: [
            {
                test: /\.scss$|\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ],
    },

};




/**
 * Get the relative path name inside the current directory
 *
 * @param {string} pathName Relative path name
 * @returns {string} Absolute path
 */
function getRelativePath(pathName) {
    return path.resolve(__dirname, pathName);
}

module.exports = config;
