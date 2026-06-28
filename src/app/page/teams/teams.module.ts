import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components-module';
import { TeamsPage } from './teams';

@NgModule({
  declarations: [TeamsPage],
  imports: [CommonModule, ComponentsModule],
})
export class TeamsModule {}
