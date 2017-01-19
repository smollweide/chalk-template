# chalk-template [![Build Status](https://img.shields.io/travis/smollweide/chalk-template/master.svg)](https://travis-ci.org/smollweide/chalk-template)

> Simple and easy to use template engine for chalk

<img src="https://cloud.githubusercontent.com/assets/2912007/22125570/7e92454e-de94-11e6-9398-d5136f498cb1.png" width="631">

## Install

```console
$ npm install --save chalk-template
```


## Usage

```js
const chalk = require('chalk');
const chalkTemplate = require('chalk-template');

console.log(
  chalkTemplate('<bold><red>Title</red></bold><error/>',
    {
      error: chalk.bold.red('Error!')
    }
  )
);
```

See [supported styles](https://github.com/chalk/chalk#styles).


## Related

- [chalk](https://github.com/chalk/chalk) - API for this module


## License

MIT © [Simon Mollweide](https://github.com/smollweide)
