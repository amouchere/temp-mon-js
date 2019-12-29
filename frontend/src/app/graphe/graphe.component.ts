import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {ConfigService} from '../config.service';
import {Payload} from '../Temp';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-graphe',
  templateUrl: './graphe.component.html',
  styleUrls: ['./graphe.component.scss']
})
export class GrapheComponent implements OnInit {

  public location;

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

  constructor(private service: ConfigService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.location = this.route.snapshot.paramMap.get('location');
    console.log("init graphe " + this.location);

    this.service.getTempsByLocation(this.location).subscribe((temps: Payload[]) => {


      temps.forEach(element => {
        this.lineChartLabels.push(element.dateTime);
      });

      this.lineChartData.push({
        label: 'humidité',
        data: temps.map(entry => entry.humidity)
      });

      this.lineChartData.push({
        label: 'température',
        data: temps.map(entry => entry.temperature),
        yAxisID: 'y-axis-1'
      });

      this.ready = true;
    });
  }
}
