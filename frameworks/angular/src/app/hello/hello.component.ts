import { Component, Input } from '@angular/core';
import { define } from 'skatejs';
import { default as PfHello } from '../web-components/pf-hello/pf-hello.component';

define(PfHello);

@Component({
  selector: 'pf-hello-component',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  /**
   * The Tooltip placement
   */
  @Input() name: string;

  constructor() {}
}
