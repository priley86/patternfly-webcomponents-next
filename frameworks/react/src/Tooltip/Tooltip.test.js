/* eslint-env jest */
/* 
  JS Dom Web Component Polyfill Workaround for Jest:
  https://github.com/tmpvar/jsdom/issues/1030

  Will be resolved in: 
  https://github.com/tmpvar/jsdom/pull/1872
*/
import 'document-register-element'

import React from 'react'
import renderer from 'react-test-renderer'

import { Tooltip } from '../index.js'

test('Tooltip renders default properly', () => {
  const component = renderer.create(
    <div>
      <Tooltip id="tooltip-right" placement="right" targetSelector="#btn-right">
        On the right.
      </Tooltip>
      <button
        id="btn-right"
        className="btn btn-danger"
        aria-describedby="tooltip-right"
      >
        Right
      </button>
    </div>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
