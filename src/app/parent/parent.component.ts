import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  data = [
    { name: "Dog", type: "animal" },
    { name: "Lilly", type: "flower" },
    { name: "Blue", type: "color" },
    { name: "Goat", type: "animal" },
    { name: "Rose", type: "flower" },
    { name: "Green", type: "color" },
    { name: "Cat", type: "animal" },
    { name: "Jasmine", type: "flower" },
    { name: "Yellow", type: "color" },
    { name: "Rabbit", type: "animal" },
    { name: "Lotus", type: "flower" },
    { name: "Red", type: "color" },
    { name: "Parrot", type: "animal" },
    { name: "Hisbiscus", type: "flower" },
    { name: "Violet", type: "color" },
  ]
  received: any;
  constructor() { }
  filteredItems: any;
  ngOnInit(): void {
    this.filteredItems = this.data;
  }
  filterType(value) {

    this.filteredItems = this.data.filter(item => item.type == value);

  }

  SelectedItem(value: any) {
    this.received = value;
  }

}
