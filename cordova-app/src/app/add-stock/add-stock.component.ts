import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  @ViewChild('browseImage') browseImage:ElementRef;
  @ViewChild('visibleImageName') visibleImageName:ElementRef;
  @ViewChild('name') name:string;
  @ViewChild('description') description:String;
  @ViewChild('score') score:Number;

  constructor(private http:HttpClient,public snackBar: MatSnackBar) { }
  public APIUrl =" https://ortj2rixy2.execute-api.us-east-1.amazonaws.com/dev/"

  ngOnInit() {
  }

  triggerBrowse() {
    this.browseImage.nativeElement.click();    
  }

  updateImageName(){
    let actualImagePath = this.browseImage.nativeElement.value;
    let imageName = actualImagePath.replace(/.*[\/\\]/, '');

    if((actualImagePath.indexOf('png') > -1) || (actualImagePath.indexOf('jpg') > -1) || (actualImagePath.indexOf('gif') > -1)){
      this.visibleImageName.nativeElement.value = imageName;
    } else {
      this.openSnackBar('Upload Images only', '');
    }    
  }

  resetStock(){
    this.browseImage.nativeElement.value = '';
    this.visibleImageName.nativeElement.value = '';
    this.description = '';
    this.name = '';
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  addStock(){
    let obj = {
      Id: Math.random().toString(),
      GiverId: this.name,
      Description: this.description,
      Score: this.score,
      GetterId: "",
      ImageUrl: "https://pbs.twimg.com/profile_images/2547401667/me_400x400.jpg"
    }

    return this.http.post(this.APIUrl+"scores",obj).subscribe((resp)=>{
        if(resp === true){
            this.openSnackBar('You shared some love', '');
          }

    });
  }

}
