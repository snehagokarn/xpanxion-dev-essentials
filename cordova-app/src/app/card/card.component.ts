import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {
   @Input('card') 
   public card:Card;
  constructor() { }
 
  ngOnInit() {
  }

}

export interface Card {
  title:string;
  description:string;
  imageUrl:string;
  imageAlt:string;
  allowLike:boolean;
}

