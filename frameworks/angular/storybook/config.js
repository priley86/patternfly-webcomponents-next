/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

// Web Component polyfills
import '../src/polyfills'

import { configure } from '@storybook/angular'

const req = require.context('../src', true, /.stories.ts$/)

function loadStories() {
  require('./welcome')
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
