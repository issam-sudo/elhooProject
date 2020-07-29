import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord-menu',
  templateUrl: './dashbord-menu.component.html',
  styleUrls: ['./dashbord-menu.component.css']
})
export class DashbordMenuComponent implements OnInit {
  color: string = "green";

  constructor() { }

  ngOnInit(): void {

  }
  setcolor(e){
    this.color = e;
    console.log(this.color)
  }

}
