import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SampleModule } from './src/app/sample/sample.module';
import { HelloModule } from './src/app/hello/hello.module';

@NgModule({
  imports: [FormsModule],
  exports: [SampleModule]
})
export class PatternFlyNgModule {}
