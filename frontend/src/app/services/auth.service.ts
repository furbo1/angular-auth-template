import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  login(): void {
    // Set isAuthenticated in localStorage or handle login logic
    localStorage.setItem('isAuthenticated', 'true');
    this.router.navigate(['/']);
  }

  logout(): void {
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('isAuthenticated');
  }
}

