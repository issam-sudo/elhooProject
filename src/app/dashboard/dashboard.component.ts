import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
import { Moment} from 'moment';

const moment =   _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
 
    dateA11yLabel: 'LL',
 
  },
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'], providers: [
   
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class DashboardComponent implements OnInit {

  typeDgr: any  ;
  e: any  ;
  date_chart = new FormControl(moment());
  date_statistique = new FormControl(moment());



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
          labels: ['Jan', 'Fev', 'Mar' , 'Apr', 'May', 'Jun', 'Jul' , 'Out' ,'Sep' ,'Oct' ,'Nov' ,'Dec'],
          datasets: [{
              label: 'Achat',
              data: [100, 150, 560 , 500, 50 , 60 , 588 , 142 ,140 ,474 ,479 ,320],
              backgroundColor: [
                'rgb(245, 89, 82 ,0)',
               

              ],
              borderColor: [
                'rgb(245, 89, 82 ,1)',
                

              ],
              borderWidth: 1,
              pointStyle:'circle',
              pointRadius:'5',
              pointBackgroundColor:'white',
              pointBorderColor:'rgb(245, 89, 82 ,1)'
          },
          {
            label: 'Vente',
            data: [0, 150, 500 , 150, 500 , 485 , 88 , 574 ,147 ,125 ,256 ,369],
            backgroundColor: [
                'rgb(210, 34, 84,0)',
               

            ],
            borderColor: [
                'rgb(210, 34, 84 ,1)',

            ],
            borderWidth: 1,
            pointStyle:'circle',
            pointRadius:'5',
            pointBackgroundColor:'white',
            pointBorderColor:'rgb(210, 34, 84 ,1)'
        }
        ]
      },
      options: {
        layout: {
          padding: {
              left: 10,
              right: 0,
              top: 0,
              bottom: 0
          }
      },
        legend: {
          display: true,
          position: 'left',
          align: 'start',
         
          labels: {
            pointBackgroundColor:'red',
            usePointStyle: true,
            
               
          }
      },
          scales: {
           
            xAxes: [{
              ticks: {
                padding: 30
              },
              gridLines: {
                display: false,
                drawOnChartArea: false,
                drawTicks: false,
               
              }
            }],
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                      display: false,
                   
                     
                  },
                  gridLines: {
                    display: false,
                    drawOnChartArea: false,
                    drawTicks: false
                  }
              }]
          }
      }
  });



   }


   chosenYearHandler_chart(normalizedYear_chart: Moment ,datepicker_chart: MatDatepicker<Moment>) {
    const ctrlValue = this.date_chart.value;
    ctrlValue.year(normalizedYear_chart.year());
    this.date_chart.setValue(ctrlValue);
    datepicker_chart.close();
  }

  
  
  chosenYearHandler_statistique(normalizedYear_statistique: Moment ,datepicker_statistique: MatDatepicker<Moment>) {
    const ctrlValue1 = this.date_statistique.value;
    ctrlValue1.year(normalizedYear_statistique.year());
    this.date_statistique.setValue(ctrlValue1);
    console.log(this.date_statistique.setValue(ctrlValue1))
    datepicker_statistique.close();
  }
 


}
