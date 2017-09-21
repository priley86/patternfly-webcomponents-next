import { default as PfTooltip } from './pf-tooltip.component'

customElements.define('pf-tooltip', PfTooltip)

describe('PatternFly Tooltip Component Tests', function() {
  let customElement, button

  beforeEach(function() {
    customElement = document.createElement('pf-tooltip')
    customElement.setAttribute('id', 'popover')
    customElement.setAttribute('placement', 'left')
    customElement.setAttribute('target-selector', '#btn')
    button = document.createElement('button')
    button.setAttribute('id', 'btn')
    document.body.appendChild(button)
    document.body.appendChild(customElement)
  })
  afterEach(function() {
    document.body.removeChild(customElement)
    document.body.removeChild(button)
  })

  it('should create the tooltip or destroy on toggle', function(done) {
    customElement.toggle()

    customElement.addEventListener(
      'pf-tooltip.opened',
      function() {
        let tooltip = document.querySelector('.tooltip')

        expect(tooltip.classList.contains('left')).toBe(true)
        customElement.close()
      },
      false
    )

    customElement.addEventListener(
      'pf-tooltip.closed',
      function() {
        expect(document.querySelector('.tooltip')).toBe(null)
        done()
      },
      false
    )
  })
})
