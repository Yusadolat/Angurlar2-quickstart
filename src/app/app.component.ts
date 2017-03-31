import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <p><strong>Email:</strong> {{email}}</p>
  <p><strong>Address:</strong> {{address.street}} {{address.city}}, {{address.state}}</p>
  <h3> Hobbies</h3>
  {{hobbies}}
  `,
})
export class AppComponent  { 
   name: string;
   email: string;
   address: address;

constructor(){
  this.name =  'Yusadolat';
   this.email =  'Yusadolat@gmail.com',
   this.address = {
     streets: '12 Yusuf St',
     city:  'Boston',
     state:  'MA'
   }
   this.hobbies = ['Coding','sleeping','Sport'];
}

 }


 interface address {
  street: string;
  city: string;
  state: string;
 }


