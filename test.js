'use strict'

import test from 'ava'
import m from '.'

test(t => {
  t.true(m('a'))
  t.true(m('i'))
  t.true(m('u'))
  t.true(m('e'))
  t.true(m('o'))
  t.true(m('á'))
  t.true(m('í'))
  t.true(m('ú'))
  t.true(m('é'))
  t.true(m('ó'))
  t.true(m('â'))
  t.true(m('î'))
  t.true(m('û'))
  t.true(m('ê'))
  t.true(m('ô'))
  t.true(m('ã'))
  t.true(m('õ'))
  t.false(m('ç'))
  t.false(m('c'))
})
