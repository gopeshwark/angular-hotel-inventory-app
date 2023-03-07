import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsComponent } from './views/rooms/rooms.component';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { HeaderComponent } from './components/header/header.component';
import { RequestInterceptor } from './request.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
