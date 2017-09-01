import React, { PropTypes } from 'react'
import { PfTooltip } from '../index.js'

customElements.define('pf-tooltip', PfTooltip)

/**
 * Tooltip Component for Patternfly React
 */
class Tooltip extends React.Component {
  componentDidUpdate() {
    this.handleContentChanged()
  }

  componentDidMount() {
    this.handleContentChanged()
  }

  handleContentChanged() {
    var event = new CustomEvent('pf-tooltip.handleContentChanged', {})
    this.pfTooltip.dispatchEvent(event)
  }

  render() {
    const { targetSelector, containerSelector, children } = this.props
    let customAttributes = {
      'target-selector': targetSelector,
      'container-selector': containerSelector
    }
    return (
      <pf-tooltip
        ref={tooltip => {
          this.pfTooltip = tooltip
        }}
        {...this.props}
        {...customAttributes}
      >
        {children}
      </pf-tooltip>
    )
  }
}

Tooltip.propTypes = {
  /** the animation class */
  animation: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  /** the target element selector */
  targetSelector: PropTypes.string,
  /** left, right, top, bottom placement */
  placement: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  /** animation delay (ms) */
  delay: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
  /** animation duration (ms) */
  duration: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
  /** the container element selector */
  containerSelector: PropTypes.string,
  /** children nodes */
  children: PropTypes.node
}

export default Tooltip
