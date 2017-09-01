// import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// App components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Main areas
//  import example modules

import { SampleExampleModule } from '../app/sample/examples/sample-example.module';
import { HelloExampleModule } from '../app/hello/examples/hello-example.module';
import { WelcomeComponent } from './components/welcome.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    SampleExampleModule,
    HelloExampleModule
  ],
  declarations: [AppComponent, WelcomeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
