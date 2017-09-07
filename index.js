'use strict'

const normalization = require('./lib/normalization')

const vowels = ['a', 'e', 'i', 'o', 'u']
module.exports = letter => vowels.includes(normalization(letter.toLowerCase()))
