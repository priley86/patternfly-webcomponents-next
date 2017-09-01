import { Component, Input, ViewEncapsulation } from '@angular/core';
import { define } from 'skatejs';
import { default as PfHello } from '../web-components/pf-hello/pf-hello.component';

define(PfHello);

/**
 * Hello component
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'pf-hello-component',
  templateUrl: './hello.component.html'
})
export class HelloComponent {
  /**
   * The name
   */
  @Input() name: string;

  /**
     * The default constructor
     */
  constructor() {}
}
