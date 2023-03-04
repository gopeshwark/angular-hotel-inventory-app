import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from 'src/app/views/rooms/rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit, OnChanges {
  @Input() rooms: RoomList[] = [];

  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
