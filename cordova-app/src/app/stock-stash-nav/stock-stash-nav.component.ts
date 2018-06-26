import { Component, OnInit } from '@angular/core';
import { AuthService } from '../AuthService';

@Component({
  selector: 'app-stock-stash-nav',
  templateUrl: './stock-stash-nav.component.html',
  styleUrls: ['./stock-stash-nav.component.css']
})
export class StockStashNavComponent implements OnInit {

  constructor( public auth :AuthService) { }

  ngOnInit() {

  }

}
