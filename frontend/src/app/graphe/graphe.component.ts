import {Location} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {ConfigService} from '../config.service';
import {Payload} from '../Temp';

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
            unit: 'hour',
            displayFormats: {
              hour: 'HH'
            }
          }
        }
      ],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          ticks: {
            fontColor: 'blue',
            stepSize: 1,
          },
          scaleLabel: {
            display: true,
            labelString: 'Taux d\'humidité'
          },
          gridLines: {
            drawOnChartArea: false
          }
        },
        {
          id: 'y-axis-1',
          position: 'right',
          ticks: {
            fontColor: 'red',
            stepSize: 1
          },
          scaleLabel: {
            display: true,
            labelString: 'Température'
          },
          gridLines: {
            drawOnChartArea: false
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

  constructor(private service: ConfigService, private route: ActivatedRoute, private locationService: Location) {
  }


  ngOnInit() {
    this.updateComponent();
    this.locationService.onUrlChange((url: string) => {
      console.log(url);
      this.updateComponent()
    });
  }

  private updateComponent() {
    this.location = this.route.snapshot.paramMap.get('location');
    console.log('update graphe ' + this.location);

    this.service.getTempsByLocation(this.location).subscribe((temps: Payload[]) => {

      this.lineChartLabels = [];
      temps.forEach(element => {
        this.lineChartLabels.push(element.dateTime);
      });

      this.lineChartData = [];
      this.lineChartData.push({
        label: 'humidité',
        data: temps.map(entry => entry.humidity),
        yAxisID: 'y-axis-0'
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
