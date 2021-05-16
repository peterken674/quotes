import { Quote } from '../quote';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-quote-form',
  templateUrl: './new-quote-form.component.html',
  styleUrls: ['./new-quote-form.component.css']
})
export class NewQuoteFormComponent implements OnInit {
    constructor(){}

  newQuote = new Quote(0, "", "", "", new Date(), 0, 0);
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    alert(`${this.newQuote.author}'s quote submitted successfully by ${this.newQuote.submitter}. Click the form header to minimize the form and view quotes.`)
  }
  ngOnInit(): void {
  }

}
