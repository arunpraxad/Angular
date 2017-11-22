import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CreditCardModule } from './credit-card/credit-card.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './credit-card/credit-card.directive';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    CreditCardModule  
  ],
  providers: [],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
