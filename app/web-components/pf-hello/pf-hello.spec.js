import { define } from 'skatejs'
import { default as PfHello } from './pf-hello.component'

define(PfHello)

describe('PatternFly Hello Component Tests', function() {
  let customElement

  beforeEach(function() {
    customElement = document.createElement('pf-hello')
    customElement.setAttribute('name', 'patrick')
    document.body.appendChild(customElement)
  })
  afterEach(function() {
    document.body.removeChild(customElement)
  })

  it('should create the pf-hello component', function() {
    let element = document.querySelector('pf-hello')
    expect(element.name).toBe('patrick')
  })
})
