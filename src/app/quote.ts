export class Quote {
    showInfo:boolean;
    constructor(public id:number, public quote:string, public author:string, public submitter:string, public dateSubmitted:Date, public upvotes:number, public downvotes:number){
        this.showInfo = false;
    }
}
