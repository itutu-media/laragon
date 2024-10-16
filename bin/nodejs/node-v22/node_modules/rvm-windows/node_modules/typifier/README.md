# typifier

[![npm package](https://img.shields.io/npm/v/typifier?color=default&style=plastic&logo=npm)](https://www.npmjs.com/package/typifier)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/magynhard/typifier?color=default&label=browser&logo=javascript&style=plastic)](https://github.com/magynhard/typifier/releases)
![downloads](https://img.shields.io/npm/dt/typifier?color=blue&style=plastic)
[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg?style=plastic&logo=mit)](LICENSE)

> The javascript library to get or check the type of a given variable.

# Table of contents

* [Usage](#usage)
* [Installation](#installation)
    * [NodeJS](#installation_node_js)
    * [Browser](#installation_browser)
* [Documentation](#documentation)
* [Contributing](#contributing)

<a name="usage"></a>

## Usage

### Usage example

```js
// node js
const Typifier = require('typifier');
// browser
<script type="text/javascript" src="js/lib/typifier.bundle.js"></script>


// code samples
Typifier.isArray([1,2,3])                       // => true
Typifier.isArray("[1,2,3]")                     // => false

Typifier.isObject({ a: b })                     // => true
Typifier.isObject([1,2,3])                      // => false

Typifier.isString("superString")                // => true
Typifier.isString(123)                          // => false
Typifier.isString(new String("string class"))   // => false

Typifier.isStringClass(new String('abc'))       // => true
Typifier.isStringClass("primitive String")      // => false

Typifier.isNumber(123)                          // => true
Typifier.isNumber(123.45)                       // => true
Typifier.isNumber("123")                        // => false
Typifier.isNumber(new Number(123))              // => false

Typifier.isNumberClass(new Number(123))         // => true
Typifier.isNumberClass(123)                     // => false

Typifier.isNumberString("123")                  // => true
Typifier.isNumberString("123.55")               // => true
Typifier.isNumberString("0x123")                // => true
Typifier.isNumberString(123)                    // => false

Typifier.isDate(new Date())                     // => true
Typifier.isDate(123)                            // => false
Typifier.isDate("2021-01-01T00:00:00Z")         // => false (class check only)

Typifier.isRegExp(/abc/g)                       // => true
Typifier.isRegExp("/abc/g")                     // => false

Typifier.isNaN(NaN)                             // => true
Typifier.isNaN(123)                             // => false

Typifier.isInfinity(Infinity)                   // => true
Typifier.isInfinity(NaN)                        // => false

Typifier.isUndefined(undefined)                 // => true
Typifier.isUndefined(0)                         // => false

Typifier.isNull(null)                           // => true
Typifier.isNull(false)                          // => false

Typifier.isBoolean(true)                        // => true
Typifier.isBoolean(false)                       // => true
Typifier.isBoolean("")                          // => false
Typifier.isBoolean(new Boolean(true))           // => false

Typifier.isBooleanClass(new Boolean(true))      // => true
Typifier.isBooleanClass(new Boolean(false))     // => true
Typifier.isBooleanClass(true)                   // => false

Typifier.isFunction((a) => {})                  // => true
Typifier.isFunction("cool")                     // => false

Typifier.isClass(Typifier)                      // => true
Typifier.isClass("stringy")                     // => false

Typifier.is("Typifier", Typifier)               // => true
Typifier.is("MyClass", MyClass)                 // => true
Typifier.is("String", "some string")            // => true
Typifier.is("Array", [1,2,3])                   // => true
Typifier.is("String", 123)                      // => false

Typifier.isSet("some string")                   // => true
Typifier.isSet("")                              // => true
Typifier.isSet(0)                               // => true
Typifier.isSet(false)                           // => true
Typifier.isSet(undefined)                       // => false
Typifier.isSet(null)                            // => false

Typifier.getType("some string")                 // => "string"
Typifier.getType(new String("some string"))     // => "String"
Typifier.getType(123)                           // => "number"
Typifier.getType(new Number(123))               // => "Number"
Typifier.getType(Typifier)                      // => "class"
Typifier.getType({ a: 1})                       // => "Object"
Typifier.getType([1,2,3])                       // => "Array"
Typifier.getType(null)                          // => "null"
Typifier.getType(undefined)                     // => "undefined"
Typifier.getType(Infinity)                      // => "Infinity"
Typifier.getType(NaN)                           // => "NaN"
Typifier.getType(() => {})                      // => "function"
Typifier.getType(true)                          // => "boolean"
Typifier.getType(new Boolean(true))             // => "Boolean"
Typifier.getType(/regex/g)                      // => "RegExp"

```

<a name="installation"></a>

## Installation

### NodeJS

You can either use npm or yarn to install *typifier*.

#### yarn

In your project root directory execute the following command:

```bash
yarn add typifier
```

### npm

In your project root directory execute the following command:

```bash
npm install typifier
```

### Browser

Download the latest [release on Github](https://github.com/magynhard/typifier/releases) or the from the folder `dist` and put it in an appropriate folder of your project, e.g. `js/lib`
and reference it by a script tag in your project:

```html

<script type="text/javascript" src="js/lib/typifier.bundle.js"></script>
```

Optionally you may add the source file to your build pipeline, if you are using webpack, brunch or any other packager.

#### Bundle releases
As `typifier` depends on [LuckyCase](https://github.com/magynhard/lucky-case), there is also a bundle release called `typifier.bundle.js` where the latter is included. If you already use [LuckyCase](https://github.com/magynhard/lucky-case) separately, use the default version `typifier.js` without included dependencies. If you don't know what you should use, use the bundled release!

#### Minified releases
If you prefer minified builds, use the `*.min.js` version. Be aware that they do not contain any javascript documentation that may be very useful when working with a powerful IDE.


<a name="documentation"></a>

## Documentation
See JS doc [here](doc/typifier.jsdoc.md).


<a name="contributing"></a>

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/magynhard/typifier. This project is intended
to be a safe, welcoming space for collaboration, and contributors are expected to adhere to
the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

