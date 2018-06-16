import { Component, OnInit, ɵisObservable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public APIUrl =" https://ortj2rixy2.execute-api.us-east-1.amazonaws.com/dev/"
  constructor(private http:HttpClient,private router:Router) { }
  public email:string;
  ngOnInit() {
  }
  login(){
    let header : HttpHeaders = new HttpHeaders({"Access-Control-Allow-Origin":"*"});
    return this.http.get(this.APIUrl + 'users/email/'+this.email,{headers:header}).subscribe( 
      response => { 
        let data:any = response;
      
        if(data.StatusCode== 200, data.Items && data.Items.length>0)
        {  
          //todo set the userservice here to have the logged in user details
          this.router.navigate(["/dashboard"]);
        }
      },
      err => console.error(err),
      () => console.log('done loading foods'));
  }
}
