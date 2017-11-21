// 导入nodejs的path这个核心包
var path = require('path');
var htmlwp = require('html-webpack-plugin');


module.exports = {
// 1.0 指定webpack的打包的入口文件
entry:'./src/main.js',

// 2.0 指定打包完成的以后的输出文件
output:{
    // 指定的是build.js要生成的目录，注意：一定是一个绝对路径，写相对路径会报错
    // __dirname：就是获取当前文件(webpack.config.js)所在的目录的绝对路径
    // path.join(__dirname,'/dist'):在老师电脑上的输出结果：F:\广州13期Vue基础和项目\基础第三天\代码day03\03webpack学习\dist
    path:path.join(__dirname,'/dist'),
    // 这个文件名称可以自定义
    filename:'build.js'
},
// 3.0 配置webpack相对于的loader包
module:{
    // 在这里配置的是具体的某一个的loader
    loaders:[
        // 配置的是用来解析.css文件的loader(style-loader和css-loader)
        {
            // 1.0 用正则匹配当前访问的文件的后缀名是  .css
            test: /\.css$/,
            loader:'style-loader!css-loader'  //webpack底层调用这些包的顺序是从右到左
        },
        {
            test:/\.less$/,
            loader:'style-loader!css-loader!less-loader'
        },
        {
            test:/\.scss$/,
            loader:'style-loader!css-loader!sass-loader'
        },
        {
            test:/\.(png|jpg|gif|woff|ttf)$/,
            loader:'url-loader?limit=5120'
        },
        {
            test:/\.vue$/,
            loader:'vue-loader'
        },
        {
            test:/\.js$/,
            loader:'babel-loader',
            exclude:/node_modules/
        },
    ]
},
plugins:[
    new htmlwp({
        filename:'index.html',
        template:'index1.html'
    })
]
}