import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ConfigService } from '../config.service';
import { Temp, Temps } from '../Temp';

@Component({
  selector: 'app-graphe',
  templateUrl: './graphe.component.html',
  styleUrls: ['./graphe.component.scss']
})
export class GrapheComponent implements OnInit {
  public ready = false;
  public lineChartData: ChartDataSets[] = [];

  public lineChartLabels: Label[] = [];

  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'minute'
          }
        }
      ]
    }
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)'
    }
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private service: ConfigService) {}

  ngOnInit() {
    this.service.getTemps().subscribe((temps: Temps[]) => {
      temps.forEach(element => {
        this.lineChartLabels = element.data.map(entry => entry.dateTime);
        this.lineChartData.push({
          label: element.location,
          data: element.data.map(entry => entry.value)
        });
      });

      this.ready = true;
      console.log('lineChartLabels ' + this.lineChartLabels);
      console.log('lineChartData ' + this.lineChartData);
    });
  }
}
