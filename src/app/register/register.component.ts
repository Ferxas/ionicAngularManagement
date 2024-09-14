import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register',
  template: `
    <ion-content class="ion-padding">
      <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
        <ion-item>
          <ion-label position="floating">Nombre</ion-label>
          <ion-input type="text" formControlName="name"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input type="email" formControlName="email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Contraseña</ion-label>
          <ion-input type="password" formControlName="password"></ion-input>
        </ion-item>
        <ion-button expand="block" type="submit" [disabled]="!registerForm.valid">
          Registrarse
        </ion-button>
      </form>
      <ion-button expand="block" fill="clear" (click)="goToLogin()">
        Volver al inicio de sesión
      </ion-button>
    </ion-content>
  `,
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.registerForm.valid) {
      // register logic
      console.log('Usuario registrado: ', this.registerForm.value);
      this.router.navigate(['/login']);
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}