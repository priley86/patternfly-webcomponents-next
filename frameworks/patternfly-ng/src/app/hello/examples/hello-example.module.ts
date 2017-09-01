import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule, TabsetConfig } from 'ngx-bootstrap/tabs';

import { DemoComponentsModule } from '../../../demo/components/demo-components.module';
import { HelloModule } from '../hello.module';
import { HelloExampleComponent } from './hello-example.component';

@NgModule({
  imports: [
    CommonModule,
    DemoComponentsModule,
    FormsModule,
    HelloModule,
    TabsModule.forRoot()
  ],
  declarations: [HelloExampleComponent],
  exports: [HelloExampleComponent],
  providers: [TabsetConfig]
})
export class HelloExampleModule {
  constructor() {}
}
