import { configure } from '@storybook/angular'
import '../src/polyfills'
import './patternfly.less'

const req = require.context('../src', true, /.stories.ts$/)

function loadStories() {
  require('./welcome')
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
