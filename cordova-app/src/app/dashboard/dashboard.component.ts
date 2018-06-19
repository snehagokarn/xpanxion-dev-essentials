import { Component, OnInit } from '@angular/core';
import{ Card } from '../card/card.component';
import {CardComponent} from '../card/card.component'
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  leaders:Array<Leader>;
  
  protected  translateToCard(leader:Leader): Card{
    return{
      allowLike:true,
      description:leader.description,
      imageUrl:leader.image,
      title: leader.fullName,
      imageAlt:""
    };

  }
  constructor(private router:Router) { }

  ngOnInit() {
    this.leaders = new Array<Leader>();
    this.leaders.push({fullName:"Sneha",score:100,image:"https://pbs.twimg.com/profile_images/2547401667/me_400x400.jpg",description:"Sneha is awesome"});
  }

  addStock(){
    this.router.navigate(["addstock"]);
  }
}
export interface Leader{
    fullName:string;
    score:number;
    image:string;
    description:string;
}