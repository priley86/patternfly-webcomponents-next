/**
 * pf-shadow-dom-utils.js
 * Shadow Dom Utility Functions for Patternfly Web Components
 */
const { attachShadow } = HTMLElement.prototype

const hasNativeShadowDomSupport =
  attachShadow && attachShadow.toString().indexOf('native code') > -1

export { hasNativeShadowDomSupport }

const $template =
  (typeof Symbol === 'function' && Symbol('')) || '__$template__'

/**
 * Scopes shadow dom css w/ shady css if native shadow dom is not supported
 * @param {element} element the custom element
 * @param {string} css the shadow dom css 
 * 
 * @returns {string} A css string or nothing if css has been scoped
 */
export function scopeCss(elem, css) {
  if (hasNativeShadowDomSupport) {
    return css
  }
  const template =
    elem[$template] || (elem[$template] = document.createElement('template'))
  template.innerHTML = `<style>${css}</style>`
  window.ShadyCSS.prepareTemplate(template, elem.localName)
}
