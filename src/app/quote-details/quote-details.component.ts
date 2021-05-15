import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleDown, faArrowAltCircleUp, faInfoCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

    upvoteIcon = faArrowAltCircleUp;
    downvoteIcon = faArrowAltCircleDown;
    deleteIcon = faTrashAlt;
    infoIcon = faInfoCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
