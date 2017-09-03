import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipExampleComponent } from './tooltip-example.component';
import { TooltipModule } from '../tooltip.module';

@NgModule({
  imports: [CommonModule, TooltipModule],
  declarations: [TooltipExampleComponent],
  exports: [TooltipExampleComponent]
})
export class TooltipExampleModule {
  constructor() {}
}
