import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div><h1> {{title}} </h1>
  <app-product-list></app-product-list>
  </div>
  `
})
export class AppComponent {
  title = 'Acme Product Management';
}
