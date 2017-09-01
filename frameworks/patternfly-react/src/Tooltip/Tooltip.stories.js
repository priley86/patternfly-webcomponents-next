import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { defaultTemplate } from '../../storybook/decorators/storyTemplates'
import { Tooltip } from '../index'

const stories = storiesOf('Tooltip', module)
stories.addDecorator(withKnobs)

stories.addDecorator(
  defaultTemplate({
    title: 'Tooltip',
    documentationLink:
      'http://www.patternfly.org/pattern-library/widgets/#tooltip'
  })
)

stories.addWithInfo('Tooltip', '', () => {
  const tooltipLeftText = text('Left Text', 'Tooltip left')
  const tooltipTopText = text('Top Text', 'Tooltip top')
  const tooltipRightText = text('Right Text', 'Tooltip right')
  const tooltipBottomText = text('Bottom Text', 'Tooltip bottom')
  return (
    <div>
      <div>
        <Tooltip
          id="tooltip-right"
          placement="right"
          targetSelector="#btn-right"
        >
          {tooltipRightText}
        </Tooltip>
        <button
          id="btn-right"
          className="btn btn-danger"
          aria-describedby="tooltip-right"
        >
          Right
        </button>
        &nbsp;&nbsp;
        <Tooltip id="tooltip-top" placement="top" targetSelector="#btn-top">
          {tooltipTopText}
        </Tooltip>
        <button
          id="btn-top"
          className="btn btn-default"
          aria-describedby="tooltip-top"
        >
          Top
        </button>
        &nbsp;&nbsp;
        <Tooltip
          id="tooltip-bottom"
          placement="bottom"
          targetSelector="#btn-bottom"
        >
          {tooltipBottomText}
        </Tooltip>
        <button
          id="btn-bottom"
          className="btn btn-warning"
          aria-describedby="tooltip-bottom"
        >
          Bottom
        </button>
        &nbsp;&nbsp;
        <Tooltip id="tooltip-left" placement="left" targetSelector="#btn-left">
          {tooltipLeftText}
        </Tooltip>
        <button
          id="btn-left"
          className="btn btn-primary"
          aria-describedby="tooltip-left"
        >
          Left
        </button>
      </div>
      <br />
      <h3>Off Screen Adjustment</h3>
      <div>
        <Tooltip
          id="tooltip-left-no-view"
          placement="left"
          targetSelector="#btn-left-no-view"
        >
          Tooltip left but not in view
        </Tooltip>
        <button
          id="btn-left-no-view"
          className="btn btn-primary"
          aria-describedby="tooltip-left-no-view"
        >
          Left
        </button>
      </div>
      <div style={{ marginLeft: 200 }}>
        <Tooltip
          id="tooltip-left-view"
          placement="left"
          targetSelector="#btn-left-view"
        >
          Tooltip Left
        </Tooltip>
        <button
          id="btn-left-view"
          className="btn btn-primary"
          aria-describedby="tooltip-left-view"
        >
          Left
        </button>
      </div>
    </div>
  )
})
