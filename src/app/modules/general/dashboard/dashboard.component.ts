import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends URLLoader implements OnInit {

  constructor() { super() }

  ngOnInit(): void {

    let data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
    let data2 = [65000, 34000, 23000, 56000, 34000, 25000, 11000];
    let labels = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var ctx1 = document.getElementsByClassName("revenue-chart");
    var ctx2 = document.getElementsByClassName("patient-chart");
    this.renderChart(data, labels, ctx1, 'rgba(67, 255, 15, 1)');
    this.renderChart(data2, labels, ctx2, 'rgba(0, 90, 224, 1)');
    super.show('Life care', 'Cette application est en cours de développment.', 'info')
  }


  renderChart(data, labels, ctx, color) {


    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: '',
          data: data,
          backgroundColor: color,
          borderColor: color,
        }]
      },
    });
  }

}
