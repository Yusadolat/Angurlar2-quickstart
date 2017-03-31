import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <p>Email: {{email}}</p>
  <p>{{address.street}}</p>
  `,
})
export class AppComponent  { 
   name =  'Yusadolat';
   email =  'Yusadolat@gmail.com',
   address = {
     street: '12 Yusuf St',
     city:  'Boston',
     state:  'MA'
   }
 }
