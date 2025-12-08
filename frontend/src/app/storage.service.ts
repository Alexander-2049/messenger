import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  set<T>(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  get<T>(key: string): string | null {
    const item = localStorage.getItem(key);
    return item;
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
