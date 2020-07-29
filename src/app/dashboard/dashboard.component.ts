import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  typeDgr: any  ;
  e: any  ;
  constructor() { }



  ngOnInit(): void {

    this.getChart();
  }


  async getChart(){

    // tslint:disable-next-line:prefer-const
    let ctx = document.getElementById('myChart');
    // tslint:disable-next-line:prefer-const
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Jan', 'Fev', 'Mar' , 'Apr', 'May', 'Jun', 'Jul' , 'Out' ],
          datasets: [{
              label: 'Achat',
              data: [10, 150, 600 , 900, 50 , 60 , 588 , 647],
              backgroundColor: [
                  'rgba(255, 99, 132, 0)',

              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',

              ],
              borderWidth: 2
          },
          {
            label: 'Vente',
            data: [10, 150, 600 , 150, 500 , 600 , 88 , 647],
            backgroundColor: [
                'rgb(30,144,255,0)',

            ],
            borderColor: [
                'rgb(30,144,255)',

            ],
            borderWidth: 2
        }
        ]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });



   }




}
