'use strict';

var postcss = require('postcss');

var pxRegExp = /\b(\d+(\.\d+)?)px\b/;
var pxGlobalRegExp = new RegExp(pxRegExp.source, 'g');

module.exports = postcss.plugin('postcss-px2rem', (option) => {
    return (root, result) => {
        root.walkDecls(function(decl) {
            if (/px/.test(decl.value)) {
                decl.value = decl.value.replace(pxGlobalRegExp, function(match, p1) {
                    return p1/2 + 'px'
                })
            }
        })
        result.root = root
    };
});
