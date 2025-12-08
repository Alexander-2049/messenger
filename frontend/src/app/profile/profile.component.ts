import { Component } from '@angular/core';
import { randomFloatNeg1_5To1_5 } from '../utils/random';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  constructor(private storage: StorageService) {}

  profileSettingsForm = new FormGroup({
    username: new FormControl(
      this.storage.get('username') || '',
      Validators.required
    ),
  });
  wrapperDegAngle = randomFloatNeg1_5To1_5();

  saveProfileSettings() {
    const username = this.profileSettingsForm.get('username');
    if (username === null || username.value === null) return;

    this.storage.set('username', username.value);
    // if (message.hasError('required') || message.value.trim() === '') {
    //   this.triggerShake();
    //   return;
    // }
  }
}
