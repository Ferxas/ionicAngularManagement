import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.loginForm.valid) {
      {
        if (
          this.loginForm.get('email')?.value === 'usuariotest@gmail.com' &&
          this.loginForm.get('password')?.value === 'password123'
        ) {
          // login successfully
          this.router.navigate(['tabs/home']);
        } else {
          alert('Credenciales incorrectas');
          this.loginForm.reset();
        }
      }
    }
  }
}
