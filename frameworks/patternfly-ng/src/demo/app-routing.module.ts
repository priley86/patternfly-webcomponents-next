import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SampleExampleComponent } from '../app/sample/examples/sample-example.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
