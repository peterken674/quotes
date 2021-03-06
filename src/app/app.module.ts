import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';

import { NewQuoteFormComponent } from './new-quote-form/new-quote-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuoteInfoComponent } from './quote-info/quote-info.component';
import { DateCountPipe } from './date-count.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    NewQuoteFormComponent,
    QuoteInfoComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    
 }
