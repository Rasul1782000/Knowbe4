import { Component, ChangeDetectorRef, effect, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AppConfigService } from '../../service/services/appconfig.service';
import { DesignerService } from '../../service/services/designer.service';

@Component({
  selector: 'app-linechart',
  standalone: false,
  templateUrl: './linechart.html',
  styleUrl: './linechart.scss'
})

export class LinechartComponent implements OnInit {
  data: any;

  options: any;

  platformId = inject(PLATFORM_ID);

  configService = inject(AppConfigService);

  designerService = inject(DesignerService);

  constructor(private cd: ChangeDetectorRef) { }

  themeEffect = effect(() => {
    if (this.configService.transitionComplete()) {
      if (this.designerService.preset()) {
        this.initChart();
      }
    }
  });

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const darkBlue = '#154ce3ff'; // Dark blue for borders and text
      const green = '#7bff07ff';   // Yellow for dataset highlights
      const white = '#f8f9fbff'; // Light gray for secondary text and grid

      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: green,
            tension: 0.4
          },
          {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: darkBlue, // Dark blue for contrast
            tension: 0.4
          }
        ]
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: white
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: white
            },
            grid: {
              color: '#f6f6f6ff',
              drawBorder: white
            }
          },
          y: {
            ticks: {
              color: white // Light gray for y-axis ticks
            },
            grid: {
              color: '#ebeceeff', // Darker gray for grid lines
              drawBorder: false
            }
          }
        }
      };
      this.cd.markForCheck();
    }
  }
}