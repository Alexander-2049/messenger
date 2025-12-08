import { Component } from '@angular/core';
import { randomFloatNeg1_5To1_5 } from '../utils/random';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  wrapperDegAngle = randomFloatNeg1_5To1_5();
}
