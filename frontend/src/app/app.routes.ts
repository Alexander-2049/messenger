import { Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ProfileComponent } from './profile/profile.component';
import { profileGuard } from './profile.guard';

export const routes: Routes = [
  {
    path: 'rooms',
    component: RoomsComponent,
    canActivate: [profileGuard],
  },
  {
    path: 'rooms/:id',
    component: ChatWindowComponent,
    canActivate: [profileGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: '',
    redirectTo: 'rooms',
    pathMatch: 'full',
  },
];
