import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  // random float in [-1.5, 1.5)
  rotateAngle: number = Math.random() * 3 - 1.5;
}
