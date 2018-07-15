import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WideWidgetComponent } from './widgets/wide/wide-widget.component';


@NgModule({
  declarations: [
    AppComponent,
    WideWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
