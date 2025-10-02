import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './Home';
import { ComponentsModule } from '../../components/components-module';

@NgModule({
  declarations: [Home],
  imports: [CommonModule, ComponentsModule]
})
export class HomeModule { }
