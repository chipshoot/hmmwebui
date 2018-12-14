import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GasLogComponent } from './automobile/gasLog/gasLog.component';
import { GasLogListComponent } from './automobile/gasLog/gasLog-list.component';
import { GasLogThumbnailComponent } from './automobile/gasLog/gasLog-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GasLogComponent,
    GasLogListComponent,
    GasLogThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
