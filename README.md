# preactz

Preact X + Domz in a convenient package.

## What is it?

Preactz allows you to use Preact without JSX, by providing an alternate syntax. This is mainly to skip transpilation.

The majority of browsers support ES6 Modules and other modern ES6 syntax, so there's no need for Babel and bundlers if you know your audience.

This package uses [developit's preact](https://github.com/developit/) and [lukejacksonn's Domz](http://github.com/lukejacksonn/domz) under the hood.

Inspired by the Preact/React integration in [developit's htm](https://github.com/developit/htm).

## Installation

You can install it via NPM:

```bash
npm i preactz
```

Or, if you want to skip the build step and use the browser's native modules, you can hotlink from unpkg:

```html
<script type="module">
import { h, useState, render } from "https://unpkg.com/preactz@^1.0.0/index.mjs";
</script>
```

## Usage

Domz's ES6 Proxy is added to Preact's `h` function.

Instead of JSX syntax, you can use methods that map automatically to HTML tags.

Read more about it in [domz repository](http://github.com/lukejacksonn/domz)

The following:

```js
const App = () => h.h1("Hello, Preact X + Domz!");
```

Is equivalent to:

```js
const App = () => <h1>Hello, Preact + Domz!</h1>;
```

However, you can still normally use `h`, since its original behavior is kept:

```js
render(h(App), document.body);
```

## Other features

### Hooks

Hooks are available in the default scope.

```js
import { h, useState, useRef, render } from "https://unpkg.com/preactz@^1.0.0/index.mjs";
```

### Fragments

To use fragments, just use an array:

```js
const App = () => [
  h.h1("It works!"),
  h.p("Preact X + Domz")
];
```

## Example app with Unpkg

Putting it all together, here's a small app:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script type="module">
      import { h, render } from "https://unpkg.com/preactz@^1.0.0/index.mjs";

      const App = () => [
        h.h1("It works!"),
        h.p("Preact X + Domz")
      ];

      render(h(App), document.body);
    </script>
  </head>
  <body>
  </body>
</html>
```

## LICENSE

```
MIT License

Copyright (c) 2019 Silvio Henrique Ferreira

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
```
