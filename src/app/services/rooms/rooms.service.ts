import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomList } from 'src/app/views/rooms/rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [];

  constructor(private http: HttpClient) { }

  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
  }
}
