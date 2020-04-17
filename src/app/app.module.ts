import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HostsService } from './services/hosts.service';

import { AppComponent } from './app.component';
import { HostsComponent } from './hosts/hosts.component';
import { AddHostComponent } from './add-host/add-host.component';
import { ListEditComponent } from './list-edit/list-edit.component';
import { HostsContainerComponent } from './hosts-container/hosts-container.component';


@NgModule({
  declarations: [
    AppComponent,
    HostsComponent,
    AddHostComponent,
    ListEditComponent,
    HostsContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
