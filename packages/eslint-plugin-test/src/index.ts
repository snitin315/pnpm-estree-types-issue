import type { ESLint } from 'eslint'

import packagePlugin from '../package.json'
import test from './rules/test.js'

export default {
  meta: {
    name: packagePlugin.name,
    version: packagePlugin.version,
  },
  rules: {
    test,
  },
} satisfies ESLint.Plugin
