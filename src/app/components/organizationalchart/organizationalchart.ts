import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-organizationalchart',
  templateUrl: './organizationalchart.html',
  styleUrls: ['./organizationalchart.scss'],
  standalone: false,
})
export class OrganizationchartComponent {
  data: TreeNode[] = [
    {
      expanded: true,
      type: 'person',
      styleClass: 'bg-indigo-100 text-indigo-900 rounded-xl',
      data: {
        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
        name: 'Amy Elsner - CEO',
      },
      children: [
        {
          expanded: true,
          type: 'person',
          styleClass: 'bg-purple-100 text-purple-900 rounded-xl',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
            name: 'Anna - CMO',
          },
          children: [
            {
              label: 'Sales',
              styleClass: 'bg-purple-100 text-purple-900 rounded-xl',
            },
            {
              label: 'Marketing',
              styleClass: 'bg-purple-100 text-purple-900 rounded-xl',
            },
          ],
        },
        {
          expanded: true,
          type: 'person',
          styleClass: 'bg-teal-100 text-teal-900 rounded-xl',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Stephen Shaw - CTO',
          },
          children: [
            {
              label: 'Development',
              styleClass: 'bg-teal-100 text-teal-900 rounded-xl',
            },
          ],
        },
      ],
    },
  ];
}
