import { Quote } from '../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes: Quote[] = [
        new Quote(1, "I think it\'s fair to say that personal computers have become the most empowering tool we\'ve ever created. They\'re tools of communication, they\'re tools of creativity, and they can be shaped by their user.", "Bill Gates", "Peter Kennedy", new Date(2020,8,29)),
        new Quote(2, "Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is an essential skill to learn.", "Stephen Hawking", "Peter Kennedy", new Date(2018,5,23)),
        new Quote(3, "I taught myself how to program computers when I was a kid, bought my first computer when I was 10, and sold my first commercial program when I was 12.", "Elon Musk", "Peter Kennedy", new Date(2020,4,1))
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
