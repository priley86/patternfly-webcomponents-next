import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SampleModule } from './src/app/sample/sample.module';

@NgModule({
  imports: [FormsModule],
  exports: [SampleModule]
})
export class PatternFlyNgModule {}
