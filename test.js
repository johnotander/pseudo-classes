import test from 'ava'
import pseudoClasses from './'

const classes = [
  'active',
  'checked',
  'default',
  'dir',
  'disabled',
  'empty',
  'enabled',
  'first',
  'first-child',
  'first-of-type',
  'fullscreen',
  'focus',
  'hover',
  'indeterminate',
  'in-range',
  'invalid',
  'lang',
  'last-child',
  'last-of-type',
  'left',
  'link',
  'not',
  'nth-child',
  'nth-last-child',
  'nth-last-of-type',
  'nth-of-type',
  'only-child',
  'only-of-type',
  'optional',
  'out-of-range',
  'read-only',
  'read-write',
  'required',
  'right',
  'root',
  'scope',
  'target',
  'valid',
  'visited'
]

test('returns a list of all pseudo-classes', t => {
  t.plan(1)

  t.same(pseudoClasses(), classes)
})
