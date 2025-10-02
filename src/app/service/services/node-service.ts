import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api'; // Import TreeNode from PrimeNG

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  getTreeNodes(): TreeNode[] {
    return [
      {
        key: '0',
        label: 'Documents',
        data: 'Documents Folder',
        icon: 'pi pi-fw pi-inbox',
        children: [
          {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
              {
                key: '0-0-0',
                label: 'Expenses.docx',
                icon: 'pi pi-fw pi-file-word-o',
                data: 'Expenses Document'
              },
              {
                key: '0-0-1',
                label: 'Resume.docx',
                icon: 'pi pi-fw pi-file-word-o',
                data: 'Resume Document'
              }
            ]
          },
          {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [
              {
                key: '0-1-0',
                label: 'Invoices.txt',
                icon: 'pi pi-fw pi-file',
                data: 'Invoices for this month'
              }
            ]
          }
        ]
      },
      {
        key: '1',
        label: 'Pictures',
        data: 'Pictures Folder',
        icon: 'pi pi-fw pi-images',
        children: [
          {
            key: '1-0',
            label: 'bar.jpg',
            icon: 'pi pi-fw pi-file-image-o',
            data: 'Bar Image'
          },
          {
            key: '1-1',
            label: 'lol.jpg',
            icon: 'pi pi-fw pi-file-image-o',
            data: 'Lol Image'
          }
        ]
      },
      {
        key: '2',
        label: 'Movies',
        data: 'Movies Folder',
        icon: 'pi pi-fw pi-film',
        children: [
          {
            key: '2-0',
            label: 'Al Pacino.mp4',
            icon: 'pi pi-fw pi-file-video-o',
            data: 'Al Pacino Movie'
          }
        ]
      }
    ];
  }

  // Alternative method for filesystem-like data (e.g., for TreeTable)
  getFilesystem(): Promise<TreeNode[]> {
    return Promise.resolve(this.getTreeNodes()); // Mock async; replace with HTTP call if needed
  }
  getFiles(): Promise<TreeNode[]> {
    return Promise.resolve(this.getTreeNodes());
  }
}