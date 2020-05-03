# @toolio/docs

**Documentation builder with themes.**

[![CircleCI](https://circleci.com/gh/tooliojs/docs.svg?style=shield)](https://circleci.com/gh/tooliojs/docs)
[![npm (scoped)](https://img.shields.io/npm/v/@toolio/docs)](https://www.npmjs.com/package/@toolio/docs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/tooliojs/docs/blob/master/LICENSE.md)
[![Chat](https://img.shields.io/badge/chat-on%20discord-blue.svg)](https://discord.gg/UuNhTFN)

## Install
```
npm install @toolio/docs --save-dev
```

## Usage
```js
const docs = require('@toolio/docs')

docs.build('html', {
    theme: 'toolio',
    mode: 'development',
    entry: 'docs',
    output: 'docs/__build__',
    tmp: 'docs/__tmp__',
    order: []
})
```
Will look for `markdown` files in "entry", and create
`HTML` snippets in "tmp". Then, the process get's proxied
to the "theme". The theme will then generate a proper 
documentation website using the snippets from "tmp" and it 
will place all the necessary site files into "output".

DOCUMENTATION COMING SOON...

## License

MIT License

Copyright (c) 2020 Toolio.js

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.