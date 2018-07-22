import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { POSMainScreenComponent } from './pos-main-screen/pos-main-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    POSMainScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
