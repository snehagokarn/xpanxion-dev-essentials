import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  public APIUrl =" https://ortj2rixy2.execute-api.us-east-1.amazonaws.com/dev/"
  
  protected  translateToCard(leader:Leader): Card{
    return{
      allowLike:true,
      description:leader.description,
      imageUrl:leader.image,
      title: leader.fullName,
      imageAlt:""
    };

  }
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.leaders = new Array<Leader>();
    return this.http.get(this.APIUrl+"dashboard").subscribe( 
      response => { 
        let data:any = response;
        if(data.Items && data.Items.length>0)
        { 
          data.Items.forEach(element => {
            this.leaders.push({
              fullName:element.GetterId,
              score:element.Score,
              image:element.ImageUrl,
              description:element.Description
            });
          });
        }
        
        return this.leaders;
      },
      err => console.error(err),
      () => console.log('done loading foods'));
    
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