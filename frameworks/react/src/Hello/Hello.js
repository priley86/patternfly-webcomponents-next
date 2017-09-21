import React from 'react'
import PropTypes from 'prop-types'

import { define } from 'skatejs'
import { PfHello } from '../index.js'

define(PfHello)

/**
 * Hello Component for Patternfly React
 */
const Hello = ({ name, children }) => {
  const attributes = { name: name }
  return (
    <pf-hello {...attributes}>
      {children}
    </pf-hello>
  )
}
Hello.propTypes = {
  /** the name attribute  */
  name: PropTypes.string,
  /** children nodes */
  children: PropTypes.node
}
Hello.defaultProps = {
  name: 'I 💗 Web Components!'
}

export default Hello
