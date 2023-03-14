import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsComponent } from './views/rooms/rooms.component';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { HeaderComponent } from './components/header/header.component';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from './views/employee/employee.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const initFactory = (initService: InitService) => {
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderComponent,
    EmployeeComponent,
    AppNavComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true,
  }, {
    provide: APP_INITIALIZER,
    useFactory: initFactory,
    deps: [InitService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
