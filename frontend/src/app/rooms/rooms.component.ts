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
  randDeg = randomFloat;
  headForm = new FormGroup({
    searchCreateInputBar: new FormControl('', Validators.required),
  });
  rooms: {
    path: string;
    title: string;
    users: number;
    maxUsers: number | null; // null = unlimited OR number > 0
  }[] = [
    {
      path: '/rooms/abc',
      title: 'Nicolas',
      users: 3,
      maxUsers: 3,
    },
    {
      path: '/rooms/abc',
      title: 'Nicolas',
      users: 3,
      maxUsers: 3,
    },
    {
      path: '/rooms/abc',
      title: 'Nicolas',
      users: 3,
      maxUsers: 3,
    },
    {
      path: '/rooms/abc',
      title: 'Nicolas',
      users: 3,
      maxUsers: 3,
    },
  ];
}
