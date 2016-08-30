import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CONFIG_TOKEN, config} from './config/configuration';
import { ChildComponent} from './child/child.component';



@NgModule({
  imports: [
      BrowserModule
  ],
  declarations: [
    AppComponent,
    ChildComponent
  ],
  providers : [
      {provide: CONFIG_TOKEN, useValue: config}
  ],
  bootstrap : [AppComponent]

})
export class AppModule { }
