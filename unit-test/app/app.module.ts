import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CTCTComponent } from './chontuconthieu.component';
import { CTHNComponent } from './chontuhopnghia.component';

@NgModule({
  declarations: [
    AppComponent,
    CTCTComponent,
    CTHNComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
