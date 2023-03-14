import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './views/rooms/rooms.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { RoomsBookingComponent } from './views/rooms-booking/rooms-booking.component';

const routes: Routes = [
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/:id', component: RoomsBookingComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: '', redirectTo: "/rooms", pathMatch: 'full' },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
