General-purpose eslint linting
==============================

[![npm version](https://img.shields.io/npm/v/mag-eslint.svg?style=flat-square)](https://www.npmjs.com/package/mag-eslint)
[![dependencies status](https://img.shields.io/david/magsdk/eslint.svg?style=flat-square)](https://david-dm.org/magsdk/eslint)
[![devDependencies status](https://img.shields.io/david/dev/magsdk/eslint.svg?style=flat-square)](https://david-dm.org/magsdk/eslint?type=dev)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/magsdk)


## Installation ##

```bash
npm install mag-eslint --save-dev
```


## Usage ##

Add file `.eslintrc.js` to your project root with the following content:

```js
module.exports = {
    extends: require.resolve('mag-eslint')
};
```

Run linting for your project:

```bash
npx eslint .
```


## Contribution ##

If you have any problems or suggestions please open an [issue](https://github.com/magsdk/eslint/issues)
according to the contribution [rules](.github/contributing.md).


## License ##

`mag-eslint` is released under the [MIT License](license.md).
