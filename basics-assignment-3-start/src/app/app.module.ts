import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { SecretComponent } from './secret/secret.component'

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    SecretComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
