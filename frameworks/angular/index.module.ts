import { NgModule } from '@angular/core';

import { HelloModule } from './src/app/hello/hello.module';
import { TooltipModule } from './src/app/tooltip/tooltip.module';

@NgModule({
  exports: [HelloModule, TooltipModule]
})
export class PatternFlyAngularWcsModule {}
