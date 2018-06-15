import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  @ViewChild('browseImage') browseImage:ElementRef;
  @ViewChild('visibleImageName') visibleImageName:ElementRef;
  @ViewChild('name') name:ElementRef;
  @ViewChild('description') description:ElementRef;

  constructor(public snackBar: MatSnackBar) { }

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
    this.description.nativeElement.value = '';
    this.name.nativeElement.value = '';
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
