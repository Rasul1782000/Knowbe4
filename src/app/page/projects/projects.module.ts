import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components-module';
import { ProjectsPage } from './projects';

@NgModule({
  declarations: [ProjectsPage],
  imports: [CommonModule, ComponentsModule],
})
export class ProjectsModule {}
