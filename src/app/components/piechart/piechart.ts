import { ChangeDetectorRef, Component, effect, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DesignerService } from '../../service/services/designer.service';
import { AppConfigService } from '../../service/services/appconfig.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-piechart',
  standalone: false,
  templateUrl: './piechart.html',
  styleUrl: './piechart.scss'
})
export class PiechartComponent implements OnInit {

  data: any;
  options: any;

  platformId = inject(PLATFORM_ID);
  configService = inject(AppConfigService);
  designerService = inject(DesignerService);

  constructor(private cd: ChangeDetectorRef) {}

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
      const whiteColor = '#ffffff';

      this.data = {
        labels: ['QA', 'Front-end', 'Backend'],
        datasets: [
          {
            data: [530, 335, 702],
            backgroundColor: [
              documentStyle.getPropertyValue('--p-cyan-500'),
              documentStyle.getPropertyValue('--p-orange-500'),
              documentStyle.getPropertyValue('--p-gray-500')
            ],
            hoverBackgroundColor: [
              documentStyle.getPropertyValue('--p-cyan-400'),
              documentStyle.getPropertyValue('--p-orange-400'),
              documentStyle.getPropertyValue('--p-gray-400')
            ]
          }
        ]
      };

      this.options = {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              color: whiteColor, // ✅ Force legend text to be white
              font: {
                size: 14,
                weight: '500'
              }
            }
          },
          tooltip: {
            bodyColor: whiteColor, // ✅ Tooltip text color white
            titleColor: whiteColor
          }
        }
      };

      this.cd.markForCheck();
    }
  }
}
