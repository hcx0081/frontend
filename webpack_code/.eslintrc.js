module.exports = {
    // 继承ESLint官方规则
    extends: ['eslint:recommended'],
    env: {
        // 启用Node中的全局变量
        node: true,
        // 启用浏览器中的全局变量
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    rules: {
        // 不能使用var定义变量
        'no-var': 2,
    },
};
