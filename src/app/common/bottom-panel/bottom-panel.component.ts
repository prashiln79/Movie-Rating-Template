import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html'
})
export class BottomPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public reset(){
    window.scrollTo(0,2);
  }
}
