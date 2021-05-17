import { Quote } from '../quote';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-quote-form',
  templateUrl: './new-quote-form.component.html',
  styleUrls: ['./new-quote-form.component.css']
})
export class NewQuoteFormComponent implements OnInit {
    constructor(){}

  newQuote = new Quote(0, "", "", "", new Date(), 0, 0,false, false);
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote(0, "", "", "", new Date(), 0, 0, false, false);
  }
  ngOnInit(): void {
  }

}
