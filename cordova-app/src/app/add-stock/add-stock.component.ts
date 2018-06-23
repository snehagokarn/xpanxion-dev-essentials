import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/first';
@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  @ViewChild('browseImage') browseImage: any;
  @ViewChild('visibleImageName') visibleImageName: string= "";
  @ViewChild('name') name: string;
  @ViewChild('description') description: String;
  @ViewChild('score') score: Number;
  base64FileStream: string;
  constructor(private http: HttpClient, public snackBar: MatSnackBar) { }
  public APIUrl = " https://ortj2rixy2.execute-api.us-east-1.amazonaws.com/dev/"

  ngOnInit() {
  }

  triggerBrowse() {
    // this.browseImage = document.getElementById("browserImage");
    // this.browseImage.click();
   
    let nav : any = navigator;
    let that = this;
    nav.camera.getPicture( (imageData)=>{
        that.base64FileStream = imageData;
        console.log(imageData);
    }, ()=>{}, { destinationType:0});
  }

  updateImageName() {
    let actualImagePath = this.browseImage.value;
    let imageName = actualImagePath.replace(/.*[\/\\]/, '');

    if ((actualImagePath.toLowerCase().indexOf('png') > -1) ||
      (actualImagePath.toLowerCase().indexOf('jpg') > -1) ||
      (actualImagePath.toLowerCase().indexOf('gif') > -1)) {
      this.visibleImageName = imageName;
      
      this.getBase64(this.browseImage.files[0], this.base64FileStream);
    } else {
      this.openSnackBar('Upload Images only', '');
    }
  }

  resetStock() {
    this.browseImage.val = '';
    this.visibleImageName = '';
    this.description = '';
    this.name = '';
    this.score = 0;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  addStock() {
    debugger;
    let obj = {
      Id: Math.random().toString(),
      GiverId: "null",//Todo put a logged in user here
      Description: this.description,
      Score: this.score,
      GetterId: this.name,
      ImageUrl: null
    }

    let fileObject= {};
    var save = this.http.post(this.APIUrl + "scores", obj);
    if (this.base64FileStream) {
    
      fileObject = {
        name: "UploadedImage"+ Date.now().toLocaleString(),
        file: this.base64FileStream,
        extension: "image/jpeg"
      }

      this.http.post(this.APIUrl + "uploadFile", fileObject).subscribe((resp: any) => {
        if (resp) {
          obj.ImageUrl = resp.Location;
          save.subscribe((saveResp) => {
            this.openSnackBar('You shared some love', '');
          });
        }
      });
    }
    else {
      save.subscribe((saveResp) => {
        this.openSnackBar('You shared some love', '');
      });
    }
  }

  private getBase64(file, converter): void {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    let that = this;
    reader.onload = function () {
      that.base64FileStream = reader.result;
      console.log(reader.result);
    };

    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}
