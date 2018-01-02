'use strict';

let postcss = require('postcss');

let pxRegExp = /\b(\d+(\.\d+)?)px\b/;
let pxGlobalRegExp = new RegExp(pxRegExp.source, 'g');

module.exports = postcss.plugin('postcss-px2rem', (option) => {
    let opt = Object.assign({
        scale: 0.5
    }, option)

    return (root, result) => {
        root.walkDecls(function(decl) {
            if (/px/.test(decl.value)) {
                decl.value = decl.value.replace(pxGlobalRegExp, function(match, p1) {
                    return p1 * opt.scale + 'px'
                })
            }
        })
        result.root = root
    };
});
