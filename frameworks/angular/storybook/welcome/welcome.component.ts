import { Component } from '@angular/core';

@Component({
  templateUrl: './welcome.component.html',
  styles: [
    `main {
      margin: 15px;
      max-width: 600;
      lineHeight: 1.4;
      fontFamily: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif;
    }
    a {
      color: #1474f3;
      text-decoration: none;
      border-bottom: 1px solid #1474f3;
      padding-bottom: 2px;
    }
    .inline-code {
      font-size: 15px;
      fontWeight: 600;
      padding: 2px 5px;
      border: 1px solid #eae9e9;
      border-radius: 4px;
      background-color: #f3f2f2;
      color: #3a3a3a;
    }
    `
  ]
})
export class WelcomeComponent {
  constructor() {}
}
