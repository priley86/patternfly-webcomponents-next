import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SampleExampleComponent } from '../app/sample/examples/sample-example.component';
import { HelloExampleComponent } from '../app/hello/examples/hello-example.component';
import { WelcomeComponent } from './components/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'sample',
    component: SampleExampleComponent
  },
  {
    path: 'hello',
    component: HelloExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
