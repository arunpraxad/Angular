import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { CreditCardModule } from './credit-card/credit-card.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './credit-card/credit-card.directive';
import { TitleComponent } from './title/title.component';
import { UserService } from './user.service';

import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    CreditCardModule,
    ContactModule
  ],
  providers: [
    UserService
  ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
