import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashbord-menu',
  templateUrl: './dashbord-menu.component.html',
  styleUrls: ['./dashbord-menu.component.scss']
})
export class DashbordMenuComponent implements OnInit {
  route_active: string = "/dashboard";
  path: string;

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
   //  this.path =this.router.url
  }
  setrouter(e){
    this.route_active = e;
    console.log(this.route_active)
  }


}
