import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {
   @Input('card')
   public card:Card;
   @Output('toogleLike')
   public toogleLike:EventEmitter<any> = new EventEmitter();
   
  constructor() { }
 
  ngOnInit() {
  }
  public toggleLike(card){
    if(card.like === 0)
      this.toogleLike.emit(1);
    else
    this.toogleLike.emit(0);
  }
}

export interface Card {
  title:string;
  description:string;
  imageUrl:string;
  imageAlt:string;
  allowLike:boolean;
  score:number;
  like:number;
}

