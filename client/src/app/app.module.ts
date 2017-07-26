import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule} from 'angular2-toaster';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {UsersService} from './users.service';
import {RouterModule} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import {AppComponent} from './app.component';
import {UserCreateComponent} from './user-create/user-create.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WelcomeComponent},
  {path: 'users/register', component: UserCreateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToasterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UsersService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
