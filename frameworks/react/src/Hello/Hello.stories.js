import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { defaultTemplate } from '../../storybook/decorators/storyTemplates'
import { Hello } from '../index'

const stories = storiesOf('Hello', module)
stories.addDecorator(withKnobs)

const description = (
  <p>
    This component is based on the Bootstrap Hello component. See{' '}
    <a href="https://getbootstrap.com/docs/3.3/css/#buttons">
      Bootstrap Docs
    </a>{' '}
    for complete Hello component documentation.
  </p>
)

stories.addDecorator(
  defaultTemplate({
    title: 'Hello',
    documentationLink:
      'http://www.patternfly.org/pattern-library/widgets/#buttons',
    description: description
  })
)

stories.addWithInfo('Hello', '', () => {
  const name = text('Name', "I'm sourced from a Storybook Text Knob")
  return (
    <div>
      <Hello name="Xuebin" />
      <Hello name="Patrick" />
      <Hello />
      <Hello name={name} />
    </div>
  )
})
