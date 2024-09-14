import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <ion-content class="ion-padding">
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input type="email" formControlName="email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Contraseña</ion-label>
          <ion-input type="password" formControlName="password"></ion-input>
        </ion-item>
        <ion-button expand="block" type="submit" [disabled]="!loginForm.valid">
          Iniciar sesión
        </ion-button>
      </form>
      <ion-button expand="block" fill="clear" (click)="goToRegister()">
        Registrarse
      </ion-button>
    </ion-content>
  `,
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      if (this.authService.login(email, password)) {
        this.router.navigate(['/tabs/home']);
      } else {
        // failed login
        alert('Credenciales incorrectas');
        console.log('Fallo en autenticación');
      }
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}