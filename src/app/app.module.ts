import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [AppComponent, TaskComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, // importe `MatToolBar` dans les imports et on le défini ici
    MatIconModule, // importe `MatIcon` dans les imports et on le défini ici
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
