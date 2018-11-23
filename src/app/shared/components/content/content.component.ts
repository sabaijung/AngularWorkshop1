import { Component, OnInit } from '@angular/core';
declare const App: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    App.initialLoadPage();
  }
}
