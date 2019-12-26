import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {ConfigService} from '../config.service';
import {PayloadByLocation} from '../Temp';

@Component({
  selector: 'app-graphe',
  templateUrl: './graphe.component.html',
  styleUrls: ['./graphe.component.scss']
})
export class GrapheComponent implements OnInit {
  public ready = false;
  public location = "";
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
      ],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          ticks: {
            fontColor: 'blue'
          },
          scaleLabel: {
            display: true,
            labelString: 'Taux d\'humidité'
          }
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red'
          },
          scaleLabel: {
            display: true,
            labelString: 'Température'
          }
        }
      ]
    }
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(25,25,255,0.3)'
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)'
    }
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private service: ConfigService) {
  }

  ngOnInit() {
    this.service.getTemps().subscribe((temps: PayloadByLocation[]) => {
      temps.forEach(element => {
        this.location = element.location;
        this.lineChartLabels = element.data.map(entry => entry.dateTime);
        this.lineChartData.push({
          label: 'humidité',
          data: element.data.map(entry => entry.humidity)
        });
        this.lineChartData.push({
          label: 'température',
          data: element.data.map(entry => entry.temperature),
          yAxisID: 'y-axis-1'
        });
      });

      this.ready = true;
      console.log('lineChartLabels ' + this.lineChartLabels);
      console.log('lineChartData ' + this.lineChartData);
    });
  }
}
