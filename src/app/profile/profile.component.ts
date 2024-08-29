import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {
  profileForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
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
