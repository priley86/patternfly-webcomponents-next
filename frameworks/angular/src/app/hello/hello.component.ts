import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { define } from 'skatejs';
import { default as PfHello } from '../web-components/pf-hello/pf-hello.component';

define(PfHello);

@Component({
  selector: 'pf-hello-component',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnChanges, OnInit {
  /**
   * The Tooltip placement
   */
  @Input() name: string;

  /**
   * The slot description
   */
  @Input() description: string;

  ngOnInit(): void {
    console.log('on init, user component');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  constructor() {}
}
