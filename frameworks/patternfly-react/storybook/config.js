// Skate js loaded Web Component polyfills
import 'skatejs-web-components'

import { configure, setAddon } from '@storybook/react'
import infoAddon from '@storybook/addon-info'

setAddon(infoAddon)

const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
