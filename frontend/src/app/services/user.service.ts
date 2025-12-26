import { Injectable } from '@angular/core';
import { BehaviorSubject, type Observable } from 'rxjs';

export interface User {
  userId: string;
  nickname: string;
  color: string;
  avatarUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$: Observable<User | null> =
    this.currentUserSubject.asObservable();

  constructor() {
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
    const userId = localStorage.getItem('userId');
    const nickname = localStorage.getItem('username');
    const color = localStorage.getItem('userColor');
    const avatarUrl = localStorage.getItem('userAvatar');

    if (userId && nickname) {
      this.currentUserSubject.next({
        userId,
        nickname,
        color: color || '#000000',
        avatarUrl: avatarUrl || '',
      });
    }
  }

  setUser(user: User): void {
    localStorage.setItem('userId', user.userId);
    localStorage.setItem('username', user.nickname);
    localStorage.setItem('userColor', user.color);
    localStorage.setItem('userAvatar', user.avatarUrl);
    this.currentUserSubject.next(user);
  }

  getUser(): User | null {
    return this.currentUserSubject.value;
  }

  getUserId(): string | null {
    let userId = localStorage.getItem('userId');
    if (!userId) {
      userId = Math.random().toString() + Math.random().toString();
      localStorage.setItem('userId', userId);
    }

    return this.currentUserSubject.value?.userId || userId;
  }

  isProfileComplete(): boolean {
    const user = this.currentUserSubject.value;
    return !!user && !!user.nickname;
  }

  clearUser(): void {
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('userColor');
    localStorage.removeItem('userAvatar');
    this.currentUserSubject.next(null);
  }
}
