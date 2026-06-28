import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components-module';
import { EmailPage } from './email';

@NgModule({
  declarations: [EmailPage],
  imports: [CommonModule, ComponentsModule],
})
export class EmailModule {}
