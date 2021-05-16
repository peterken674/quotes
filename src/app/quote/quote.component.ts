import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
import { faArrowAltCircleDown, faArrowAltCircleUp, faInfoCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
    upvoteIcon = faArrowAltCircleUp;
    downvoteIcon = faArrowAltCircleDown;
    deleteIcon = faTrashAlt;
    infoIcon = faInfoCircle;

    unsortedQuotes: Quote[] = [
        new Quote(1, "I think it's fair to say that personal computers have become the most empowering tool we\'ve ever created. They're tools of communication, they're tools of creativity, and they can be shaped by their user.", "Bill Gates", "Rachel Green", new Date(2021,2,29),29, 12),
        new Quote(2, "Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is an essential skill to learn.", "Stephen Hawking", "Monica Geller", new Date(2021,3,23),54, 23),
        new Quote(3, "I taught myself how to program computers when I was a kid, bought my first computer when I was 10, and sold my first commercial program when I was 12.", "Elon Musk", "Chandler Bing", new Date(2021,4,1), 76, 6),
        new Quote(4, "If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it.", "Lyndon B. Johnson", "Joey Tribbiani", new Date(2021,5,12), 20, 13),
        new Quote(5, "I wish there was a way to know you were in the good old days before you actually left them.", "Andy Bernard", "Ross Geller", new Date(2021,5,16),82,2),
        new Quote(6, 'As I swept the last bit of dust, I made a covenant with myself: I will accept. Whatever will be, will be. I have a life to lead. I recalled words a friend had told me, the philosophy of her faith. "Life is a journey and a struggle," she had said. "We cannot control it, but we can make the best of any situation." I was indeed in quite a situation. It was up to me to make the best of it.', "Wangari Maathai", "Peter Kennedy", new Date(2020,5,29),145,21)
    ];

    deleteQuote(index){
            let toDelete = confirm(`Are you sure you want to delete this quote by ${this.quotes[index].author}?`);
            if(toDelete){
                this.quotes.splice(index, 1);
            }
    }
    showForm:boolean = false;
    toggleForm(){
        this.showForm = !this.showForm;
    }
    upvoted:boolean = false;
    downvoted:boolean = false;
    upvote(index){
        if(!this.upvoted){
            this.quotes[index].upvotes += 1;
            this.upvoted = true;
            if(this.downvoted){
                this.quotes[index].downvotes -= 1
                this.downvoted = false;
            }
        }else{
            this.quotes[index].upvotes -= 1;
            this.upvoted = false;
        }
    }
    downvote(index){
        if(!this.downvoted){
            this.quotes[index].downvotes += 1;
            this.downvoted = true;
            if(this.upvoted){
                this.quotes[index].upvotes -= 1
                this.upvoted = false;
            }
        }else{
            this.quotes[index].downvotes -= 1
            this.downvoted = false;
        }
    }
    showInfo(index){
        this.quotes[index].showInfo = !this.quotes[index].showInfo;
    }

    //Add new quote
    addNewQuote(quote){
        quote.id = this.quotes.length + 1;
        this.quotes.push(quote);
    }

    quotes: Quote[] = this.unsortedQuotes.sort((obj1, obj2) => {
          if (obj1.upvotes < obj2.upvotes) {
            return 1;
          }

          if (obj1.upvotes > obj2.upvotes) {
            return -1;
          }

          return 0;
        });

        topQuote(index){

        }
  constructor() { }

  ngOnInit(): void {
  }

}
