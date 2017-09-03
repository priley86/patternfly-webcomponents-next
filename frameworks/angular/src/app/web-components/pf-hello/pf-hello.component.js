import * as skate from 'skatejs'

/**
 * PfHello Web Component for Patternfly Web Components
 */
class PfHello extends skate.Component {
  static get is() {
    return 'pf-hello'
  }
  static get props() {
    return {
      name: { attribute: true }
    }
  }
  renderCallback() {
    return skate.h('div', `Hello, ${this.name}`)
  }
}
export default PfHello
