import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatRoomService extends EventEmitter {
  constructor() {
    super();
  }
}
