import React from 'react'
import PropTypes from 'prop-types'

import { define } from 'skatejs'
import { PfHello } from '../index.js'

define(PfHello)

/**
 * Hello Component for Patternfly React
 */
const Hello = ({ name }) => {
  const attributes = { name: name }
  return <pf-hello {...attributes} />
}
Hello.propTypes = {
  /** the name attribute  */
  name: PropTypes.string
}
Hello.defaultProps = {
  name: 'I Love Web Components!'
}

export default Hello
