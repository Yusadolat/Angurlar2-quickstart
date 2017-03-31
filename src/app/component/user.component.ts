import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  <p><strong>Email:</strong> {{email}}</p>
  <p><strong>Address:</strong> {{address.street}} {{address.city}}, {{address.state}}</p>
  `,
})
export class UserComponent  { 
   name =  'Yusadolat';
   email =  'Yusadolat@gmail.com',
   address = {
     street: '12 Yusuf St',
     city:  'Boston',
     state:  'MA'
   }
 }
