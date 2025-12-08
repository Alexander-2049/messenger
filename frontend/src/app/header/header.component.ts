import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private storage: StorageService) {}

  isProfileReady = !!this.storage.get('username');

  links: {
    title: string;
    path: string;
    icon: string;
  }[] = [
    {
      title: 'Rooms',
      path: 'rooms',
      icon: 'assets/open-door-icon.png',
    },
    {
      title: 'Profile',
      path: 'profile',
      icon: 'assets/user.png',
    },
  ];
}
