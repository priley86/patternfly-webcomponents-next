// Web Component polyfills
import '@webcomponents/webcomponentsjs/webcomponents-sd-ce'
import '@webcomponents/custom-elements/src/native-shim'

import { configure, setAddon } from '@storybook/react'
import infoAddon from '@storybook/addon-info'

setAddon(infoAddon)

const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
