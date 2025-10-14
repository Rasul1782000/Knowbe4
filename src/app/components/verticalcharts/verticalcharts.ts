import { Component, OnInit, PLATFORM_ID, ChangeDetectorRef, inject, effect } from '@angular/core';
import { AppConfigService } from '../../service/services/appconfig.service';
import { isPlatformBrowser } from '@angular/common';
import { DesignerService } from '../../service/services/designer.service';

@Component({
  selector: 'app-Verticalcharts',
  templateUrl: './verticalcharts.html',
  styleUrls: ['./verticalcharts.scss'],  // Fixed typo
  standalone: false,
})
export class VerticalchartsComponent implements OnInit {
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

      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: '#0022cc', // Use backgroundColor for bars
            borderColor: '#f3f8f1ff',     // Optional: bar border
            borderWidth: 1
          },
          {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            backgroundColor: '#81f909ff',
            borderColor: '#fbf8f0ff',
            borderWidth: 1
          }
        ]
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: '#f2eff0ff'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#f3eff1ff'
            },
            grid: {
              color: '#0db8e8ff',
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: '#f0eef0ff',
              beginAtZero: true
            },
            grid: {
              color: '#0e0e0fff',
              drawBorder: false
            }
          }
        },
        layout: {
          padding: 0,
          backgroundColor: '#ffffff'
        }
      };

      this.cd.markForCheck();
    }
  }
}
