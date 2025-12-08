import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private storage: StorageService) {}

  isProfileReady = false;
  imagesLoaded: { [key: string]: boolean } = {};

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

  ngOnInit() {
    this.isProfileReady = !!this.storage.get('username');

    this.links.forEach((link) => {
      this.imagesLoaded[link.icon] = false;
    });
  }

  onImageLoad(icon: string) {
    this.imagesLoaded[icon] = true;
  }
}
