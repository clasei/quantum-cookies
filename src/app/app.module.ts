import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { RefreshButtonComponent } from './components/refresh-button/refresh-button.component';
import { QuantumCookiesDisplayComponent } from './components/quantum-cookies-display/quantum-cookies-display.component';
import { InfoComponent } from './components/info/info.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInputComponent,
    ActionButtonComponent,
    RefreshButtonComponent,
    QuantumCookiesDisplayComponent,
    InfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
