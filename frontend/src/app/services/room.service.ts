import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import type { Room, CreateRoomRequest, Message } from '../models/api.models';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private apiUrl = API_CONFIG.BASE_URL;

  constructor(private http: HttpClient) {}

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiUrl}/api/rooms`);
  }

  createRoom(room: CreateRoomRequest): Observable<Room> {
    return this.http.post<Room>(`${this.apiUrl}/api/rooms`, room);
  }

  getArchivedRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiUrl}/api/archive/rooms`);
  }

  getArchivedRoomMessages(roomId: number): Observable<Message[]> {
    return this.http.get<Message[]>(
      `${this.apiUrl}/api/archive/rooms/${roomId}`
    );
  }
}
