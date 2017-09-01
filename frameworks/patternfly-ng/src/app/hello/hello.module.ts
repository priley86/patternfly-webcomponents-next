import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloComponent } from './hello.component';

/**
 * A module containing objects associated with the hello component
 */
@NgModule({
  imports: [CommonModule],
  declarations: [HelloComponent],
  exports: [HelloComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelloModule {}
