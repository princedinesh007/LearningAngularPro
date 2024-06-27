import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
childFlower:any;


  @Input()  items = [];
  @Output() SelectedItemEmitter =new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendtoParent(data:any)
  {
     this.SelectedItemEmitter.emit(data)
  }

}
