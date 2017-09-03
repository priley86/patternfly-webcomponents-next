import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipComponent } from './tooltip.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TooltipComponent],
  exports: [TooltipComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TooltipModule {}
