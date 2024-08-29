import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule] // Importar ReactiveFormsModule para usar FormGroup y Validators
})
export class ProfileComponent  implements OnInit {
  profileForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
    });
   }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Perfil actualizado', this.profileForm.value);
    }
  }

  ngOnInit() {}

}
