const path = require('path');

/* 引入ESLint */
const ESLintPlugin = require('eslint-webpack-plugin');

/* 引入HtmlWebpack */
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* 引入MiniCssExtract */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/* 引入CssMinimizer */
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

/* 引入ImageMinimizer */
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    // 入口
    entry: './src/main.js',// 相对路径
    // 输出
    output: {
        // 所有文件的输出目录
        path: path.resolve(__dirname, '../dist'),// 绝对路径
        // 入口文件名
        filename: 'js/main.js',

        // 每一次构建前清理
        clean: true
    },
    // 加载器
    module: {
        rules: [
            {
                oneOf: [
                    // loader的配置
                    // {
                    //     test: /\.css$/i,
                    //     // use执行顺序从右到左
                    //     use: [
                    //         // 读取JavaScript文件中CommonJS模块导出的CSS资源，通过创建<style>标签方式添加到DOM中生效
                    //         "style-loader",
                    //         // 解析JavaScript文件中import的CSS文件，转换为CommonJS模块形式
                    //         "css-loader"
                    //     ],
                    // },
                    {
                        test: /\.css$/i,
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    postcssOptions: {
                                        plugins: [
                                            [
                                                'postcss-preset-env',// 智能预设
                                            ],
                                        ],
                                    },
                                },
                            },
                        ],
                    },


                    {
                        test: /\.less$/i,
                        use: [
                            'style-loader',
                            'css-loader',
                            'less-loader',
                        ],
                    },
                    {
                        test: /\.(png|svg|jpg|jpeg|gif)$/i,
                        type: 'asset',
                        parser: {
                            dataUrlCondition: {
                                // 小于10kb的图片转换为asset/inline（Base64）
                                maxSize: 10 * 1024// 10kb
                            }
                        }
                    },
                    {
                        test: /\.(woff|woff2|eot|ttf|otf)$/i,
                        type: 'asset/resource',
                    },

                    // 图片的输出目录
                    {
                        test: /\.(png|svg|jpg|jpeg|gif)$/i,
                        type: 'asset/resource',
                        generator: {
                            // 图片的输出文件名（hash值只取前10位）
                            filename: 'static/img/[hash:10][ext][query]'
                        }
                    },
                    // 字体的输出目录
                    {
                        test: /\.(woff|woff2|eot|ttf|otf)$/i,
                        type: 'asset/resource',
                        generator: {
                            // 图片的输出文件名（hash值只取前10位）
                            filename: 'static/font/[hash:10][ext][query]'
                        }
                    },


                    {
                        test: /\.m?js$/,
                        // 排除文件，即不处理文件
                        exclude: /(node_modules|bower_components)/,
                        loader: 'babel-loader',
                        // 选项，可以在babel.config.js等文件配置
                        options: {
                            // 预设
                            // presets: ['@babel/preset-env']


                            // 开启缓存
                            cacheDirectory: true,
                            // 压缩缓存，会使用Gzip压缩
                            cacheCompression: true,// 默认值为true
                        },
                        plugins: ['@babel/plugin-transform-runtime'],// 减少代码体积
                    },
                ]
            }
        ]
    },
    // 插件
    plugins: [
        // plugin的配置
        new ESLintPlugin({
            // 检查路径
            context: path.resolve(__dirname, '../src'),
            exclude: 'node_modules',// 默认值
        }),

        new HtmlWebpackPlugin({
            // 以指定文件为模板创建新文件：
            // 1.结构一致
            // 2.自动引入入口文件
            template: path.resolve(__dirname, '../public/index.html')
        }),

        new MiniCssExtractPlugin({
            filename: 'static/css/main.css'
        }),

        new CssMinimizerPlugin(),


        // 压缩图片
        new ImageMinimizerPlugin({
            minimizer: {
                implementation: ImageMinimizerPlugin.imageminGenerate,
                options: {
                    plugins: [
                        ['gifsicle', {interlaced: true}],
                        ['jpegtran', {progressive: true}],
                        ['optipng', {optimizationLevel: 5}],
                        [
                            'svgo',
                            {
                                plugins: [
                                    'preset-default',
                                    'prefixIds',
                                    {
                                        name: 'sortAttrs',
                                        params: {
                                            xmlnsOrder: 'alphabetical',
                                        },
                                    },
                                ],
                            },
                        ],
                    ],
                },
            },
        }),
    ],
    // 模式
    mode: 'production',

    devtool: 'source-map',
};
