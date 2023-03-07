import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { RoomList } from 'src/app/views/rooms/rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [];

  getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(shareReplay(1))

  constructor(private http: HttpClient) { }

  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }
}
