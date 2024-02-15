import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  handleSubmit() {
    const loginData = { username: this.email, password: this.password };
    this.http.post<{message: string}>('http://localhost:3001/login', loginData, { responseType: 'json' })
      .subscribe({
        next: (data) => {
          alert(data.message);
          localStorage.setItem('isAuthenticated', 'true');
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Login error:', error);
          alert('An error occurred during login.');
        }
      });
  }
}

