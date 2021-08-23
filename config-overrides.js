const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');

// const addCustomize = () => config => {
//     // 配置打包后的文件位置
//     config.output.publicPath = './';
//     return config;
// };
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'nxs-ui',
        libraryDirectory: 'es',
        style: true,
    }),
    addWebpackAlias({ //路径别名
        '@': path.resolve(__dirname, './src'),
    }),
    // addCustomize(),
);
