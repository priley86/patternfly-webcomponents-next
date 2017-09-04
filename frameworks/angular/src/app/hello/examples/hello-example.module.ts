import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloExampleComponent } from './hello-example.component';
import { HelloModule } from '../hello.module';

@NgModule({
  imports: [CommonModule, HelloModule],
  declarations: [HelloExampleComponent],
  exports: [HelloExampleComponent]
})
export class TooltipExampleModule {
  constructor() {}
}
