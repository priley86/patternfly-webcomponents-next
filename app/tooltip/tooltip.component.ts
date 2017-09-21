import { Component, Input } from '@angular/core';
import { default as PfTooltip } from '../web-components/pf-tooltip/pf-tooltip.component';

customElements.define('pf-tooltip', PfTooltip);

@Component({
  selector: 'pf-tooltip-component',
  templateUrl: './tooltip.component.html'
})
export class TooltipComponent {
  /**
   * The Tooltip placement
   */
  @Input() placement: string;

  /**
   * The Tooltip target selector
   */
  @Input() targetSelector: string;

  /**
   * The Tooltip container selector
   */
  @Input() containerSelector: string;

  /**
   * The Tooltip animation class
   */
  @Input() animation: string;

  /**
   * The Tooltip animation delay
   */
  @Input() delay: string;

  /**
   * The Tooltip animation duration
   */
  @Input() duration: string;

  /**
   * The Tooltip text
   */
  @Input() tooltipText: string;

  constructor() {}
}
