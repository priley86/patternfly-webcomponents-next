import React, { PropTypes } from 'react'
import { PfTooltip } from '../index.js'
import { define } from 'skatejs'

window.customElements.define('pf-tooltip', PfTooltip)

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
    const {
      animation,
      targetSelector,
      placement,
      delay,
      duration,
      containerSelector
    } = this.props
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
        {this.props.children}
      </pf-tooltip>
    )
  }
}

Tooltip.propTypes = {
  /** the animation class */
  animation: React.PropTypes.string,
  /** the target element selector */
  targetSelector: React.PropTypes.string,
  /** left, right, top, bottom placement */
  placement: React.PropTypes.string,
  /** animation delay (ms) */
  delay: React.PropTypes.number,
  /** animation duration (ms) */
  duration: React.PropTypes.number,
  /** the container element selector */
  containerSelector: React.PropTypes.string
}

export default Tooltip
