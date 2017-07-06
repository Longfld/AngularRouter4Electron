import { Component } from '@angular/core';
import './rxjs-operators';

@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular App with router in Electron</h1>
  <my-router-link ></my-router-link>
  <router-outlet></router-outlet>
  `
})
export class AppComponent { }
