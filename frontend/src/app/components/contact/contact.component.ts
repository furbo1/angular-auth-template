import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  handleSubmit() {
    // Handle form submission logic here
    console.log({ name: this.name, email: this.email, message: this.message });
    alert('Thank you for your message!');
    // Reset form fields
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
