import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment'; // Adjust the path as necessary

interface RegistrationResponse {
  // Define the expected structure of your backend response here
  hashedPassword: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  handleSubmit() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Use the BACKEND_URL from your environment configuration
    const BACKEND_URL = environment.BACKEND_URL;

    this.http.post<RegistrationResponse>(`${BACKEND_URL}/register`, {
      username: this.email,
      password: this.password
    }, { observe: 'response' })
      .subscribe({
        next: (response) => {
          // Assuming the backend sends back the hashed password to store in local storage
          // Check if the response body exists and contains the hashedPassword
          if (response.body) {
            localStorage.setItem('user', JSON.stringify({ username: this.email, password: response.body.hashedPassword }));
            alert('Registration successful');
            this.router.navigate(['/']); // Navigate to home or other page upon successful registration
          } else {
            alert('Registration failed');
          }
        },
        error: (error) => {
          console.error('Registration error:', error);
          alert('An error occurred during registration.');
        }
      });
  }
}
