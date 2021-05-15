import { Quote } from '../quote';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {

    @Input() quote: Quote;
  constructor() { }

  ngOnInit(): void {
  }

}
