import { Component } from '@angular/core';
import { TooltipComponent } from '../tooltip.component';

@Component({
  templateUrl: './tooltip-example.component.html',
  styles: [
    `main {
      margin: 15px;
      max-width: 600;
      lineHeight: 1.4;
      fontFamily: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif;
    }`
  ]
})
export class TooltipExampleComponent extends TooltipComponent {}
