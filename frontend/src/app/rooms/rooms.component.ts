import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { randomFloat } from '../utils/random';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent {
  wrapperDegAngle = randomFloat(-1.5, 1.5);
  headForm = new FormGroup({
    searchCreateInputBar: new FormControl('', Validators.required),
  });

  rooms: {
    path: string;
    title: string;
    users: number;
    maxUsers: number | null;
  }[] = [
    {
      path: '/rooms/general',
      title: 'General Chat',
      users: 12,
      maxUsers: null,
    },
    {
      path: '/rooms/gaming',
      title: 'Gaming Squad',
      users: 5,
      maxUsers: 8,
    },
    {
      path: '/rooms/study',
      title: 'Study Group',
      users: 3,
      maxUsers: 4,
    },
    {
      path: '/rooms/music',
      title: 'Music Lovers',
      users: 8,
      maxUsers: 10,
    },
    {
      path: '/rooms/coding',
      title: 'Web Dev Nerds',
      users: 2,
      maxUsers: 6,
    },
    {
      path: '/rooms/coffee',
      title: 'Coffee Break',
      users: 7,
      maxUsers: null,
    },
    {
      path: '/rooms/films',
      title: 'Movie Night',
      users: 4,
      maxUsers: 5,
    },
    {
      path: '/rooms/art',
      title: 'Creative Corner',
      users: 6,
      maxUsers: 12,
    },
    {
      path: '/rooms/sports',
      title: 'Sports Talk',
      users: 9,
      maxUsers: 15,
    },
    {
      path: '/rooms/travel',
      title: 'Wanderlust Chronicles',
      users: 11,
      maxUsers: null,
    },
    {
      path: '/rooms/cooking',
      title: 'Culinary Creations',
      users: 5,
      maxUsers: 8,
    },
    {
      path: '/rooms/tech',
      title: 'Tech Trends',
      users: 14,
      maxUsers: 20,
    },
    {
      path: '/rooms/books',
      title: 'Book Club',
      users: 3,
      maxUsers: 6,
    },
    {
      path: '/rooms/fitness',
      title: 'Fitness Fanatics',
      users: 8,
      maxUsers: 12,
    },
  ];
}
