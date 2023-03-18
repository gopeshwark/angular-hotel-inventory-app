import { Component } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms/rooms.service';
import { RoomList } from '../rooms/rooms';

@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.scss']
})
export class AddRoomsComponent {
  room: RoomList = {
    roomType: '',
    amenities: '',
    photos: '',
    price: 0,
    rating: 0,
    checkinTime: new Date(),
    checkoutTime: new Date(),
  }

  successMessage: string = '';

  constructor(private roomService: RoomsService) { }

  AddRoom() {
    this.roomService.addRoom(this.room).subscribe(data => this.successMessage = 'Room Added Successfully!')
  }
}
