'use strict';

var assert = require('assert');
var path = require('path');
var fs = require('fs');
var pxResize = require('..');
var postcss = require('postcss');
var autoprefixer = require('autoprefixer');

var opacity = function (css) {
  css.walkDecls(function (decl) {
    if (decl.prop === 'opacity') {
      decl.parent.insertAfter(decl, {
        prop: '-ms-filter',
        value: '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + (parseFloat(decl.value) * 100) + ')"'
      });
    }
  });
};

describe('postcss-px-resize', function () {

  it('[default] should output right rem file', function () {
    var srcPath = path.join(__dirname, 'source.css');
    var srcText = fs.readFileSync(srcPath, {encoding: 'utf8'});
    var outputText = postcss().use(pxResize({scale: 0.5})).process(srcText).css;
    var expectedText = fs.readFileSync(path.join(__dirname, 'dest.basic.css'), {encoding: 'utf8'});
    assert.equal(outputText, expectedText);
  });

  // it('should get along well with other plugins', function () {
  //   var srcPath = path.join(__dirname, 'source.css');
  //   var srcText = fs.readFileSync(srcPath, {encoding: 'utf8'});
  //   var outputText = postcss()
  //     .use(autoprefixer({browsers: ['iOS >= 6', 'Android >= 2.3']}))
  //     .use(pxResize({remUnit: 75}))
  //     .use(opacity)
  //     .process(srcText).css;
  //   var expectedText = fs.readFileSync(path.join(__dirname, 'dest.multiple.css'), {encoding: 'utf8'});
  //   assert.equal(outputText, expectedText);
  // });
});
