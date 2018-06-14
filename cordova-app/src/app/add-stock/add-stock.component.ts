import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  @ViewChild('browseImage') browseImage:ElementRef;
  @ViewChild('visibleImageName') visibleImageName:ElementRef;

  constructor() { }

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
      this.browseImage.nativeElement.value = '';
      console.log("You can upload an image file only");
    }    
  }

}
