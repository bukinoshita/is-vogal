# is-vogal

> Check if letter is a vowel

Different from [is-vowel](https://www.npmjs.com/package/is-vowel), `is-vogal` normalizes the letter before checking. Eg: `á` normalizes to `a`.


## Install

```bash
$ yarn add is-vogal
```


## Usage

```js
const isVogal = require('is-vogal')

isVogal('a')
// => true

isVogal('ã')
// => true

isVogal('p')
// => false
```


## API

### isVogal(input)

Returns a `boolean`

#### input

Type: `string`<br />
Required

Letter to be checked


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
