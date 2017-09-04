import * as skate from 'skatejs'
import { scopeCss } from '../pf-utils/pf-shadow-dom-utils'
import styles from './pf-hello.shadow.css'

/**
 * PfHello Web Component for Patternfly Web Components
 */
class PfHello extends skate.Component {
  /**
   * Skate uses the is() property when defining the element
   * in the registry
   * @returns {string} the custom element name
   */
  static get is() {
    return 'pf-hello'
  }

  /**
   * Skate uses props to define element properties/attributes
   * and supports complex types such as object or array
   * @returns {object} the element props
   */
  static get props() {
    return {
      // Link the `name` property to the `name` attribute automatically.
      name: { attribute: true }
    }
  }

  css() {
    return scopeCss(this, styles)
  }

  /**
   * Skate render function (rendered as Virtual DOM)
   * https://skatejs.gitbooks.io/skatejs/content/docs/api/vdom.html#incremental-dom
   */
  renderCallback({ name }) {
    return skate.h(
      'div',
      skate.h('style', this.css()),
      skate.h('p', `Hello from the Shadow DOM, ${name}!`)
    )
  }
}
export default PfHello
