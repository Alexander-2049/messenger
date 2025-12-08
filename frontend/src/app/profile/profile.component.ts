import { Component, OnInit } from '@angular/core';
import { randomFloatNeg1_5To1_5 } from '../utils/random';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  profileSettingsForm = new FormGroup({
    username: new FormControl('', Validators.required),
  });

  wrapperDegAngle = randomFloatNeg1_5To1_5();
  avatarImage: string | null = null;

  ngOnInit() {
    // Load saved username
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      this.profileSettingsForm.get('username')?.setValue(savedUsername);
    }

    // Load saved avatar
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) {
      this.avatarImage = savedAvatar;
    }
  }

  onAvatarSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result as string;
        this.avatarImage = result;
      };
      reader.readAsDataURL(file);
    }
  }

  removeAvatar(): void {
    this.avatarImage = null;
    localStorage.removeItem('userAvatar');
  }

  saveProfileSettings(): void {
    const username = this.profileSettingsForm.get('username');

    if (!username?.value || username.value.trim() === '') {
      return;
    }

    // Save username
    localStorage.setItem('username', username.value);

    // Save avatar if exists
    if (this.avatarImage) {
      localStorage.setItem('userAvatar', this.avatarImage);
    }

    // Navigate or show success message
    window.location.href = '/';
  }
}
