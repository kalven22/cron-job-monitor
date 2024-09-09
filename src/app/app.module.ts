import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Required for Material animations
    MatButtonModule // Add MatButtonModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
