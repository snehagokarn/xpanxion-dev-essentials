import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  title:string;
  description:string;
  imageUrl:string;
  imageAlt:string;
  allowLike:boolean;

  constructor() { }

  ngOnInit() {
  }

}
