var name = 'zs';
name = 'zs';
module.exports.name = name;

// console.log(module);
/*
Module {
  id: '.',
  path: 'd:\\web\\node.js\\entry',
  exports: { name: 'zs' },
  filename: 'd:\\web\\node.js\\entry\\mo.js',
  loaded: false,
  children: [],
  paths: [
    'd:\\web\\node.js\\entry\\node_modules',
    'd:\\web\\node.js\\node_modules',
    'd:\\web\\node_modules',
    'd:\\node_modules'
  ]
}
*/

// console.log(module.exports);
/*
{ name: 'zs' }
*/


// console.log(global);


// console.log(arguments);
/*
[Arguments] {
  '0': { name: 'zs' },
  '1': [Function: require] {
    resolve: [Function: resolve] { paths: [Function: paths] },
    main: Module {
      id: '.',
      path: 'd:\\web\\node.js\\entry',
      exports: [Object],
      filename: 'd:\\web\\node.js\\entry\\mo.js',
      loaded: false,
      children: [],
      paths: [Array]
    },
    extensions: [Object: null prototype] {
      '.js': [Function (anonymous)],
      '.json': [Function (anonymous)],
      '.node': [Function (anonymous)]
    },
    cache: [Object: null prototype] {
      'd:\\web\\node.js\\entry\\mo.js': [Module]
    }
  },
  '2': Module {
    id: '.',
    path: 'd:\\web\\node.js\\entry',
    exports: { name: 'zs' },
    filename: 'd:\\web\\node.js\\entry\\mo.js',
    loaded: false,
    children: [],
    paths: [
      'd:\\web\\node.js\\entry\\node_modules',
      'd:\\web\\node.js\\node_modules',
      'd:\\web\\node_modules',
      'd:\\node_modules'
    ]
  },
  '3': 'd:\\web\\node.js\\entry\\mo.js',
  '4': 'd:\\web\\node.js\\entry'
}
*/

// console.log(arguments.callee.toString());
/*
function (exports, require, module, __filename, __dirname) {
    console.log(arguments.callee.toString());
}
*/
