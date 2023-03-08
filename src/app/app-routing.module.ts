import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './views/rooms/rooms.component';
import { EmployeeComponent } from './views/employee/employee.component';

const routes: Routes = [
  { path: 'rooms', component: RoomsComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: '', redirectTo: "/rooms", pathMatch: 'full' },
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
