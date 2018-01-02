# postcss-px-resize

[![Build Status](https://travis-ci.org/wh8766/postcss-px-resize.svg?branch=master)](https://travis-ci.org/wh8766/postcss-px-resize)

> A postcss plugin to resize px in src.

Project reference：https://github.com/songsiqi/px2rem-postcss

## Use

    npm install postcss-px-resize --save-dev

In Webpack 3, add `.postcssrc.js` PostCSS config file:

```js
module.exports = () => ({
    plugins: {
        "autoprefixer":{
            // remove: false
            browsers: ['iOS >= 7', 'Android >= 4.1']
        },
        "postcss-px-resize": {
            scale: 0.5
        }
    }
})
```

## Options

- scale: target scale value, default is 0.5, eg: 50px in scss file will resize to 25px.
