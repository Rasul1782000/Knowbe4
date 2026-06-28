import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components-module';
import { MessagesPage } from './messages';

@NgModule({
  declarations: [MessagesPage],
  imports: [CommonModule, ComponentsModule],
})
export class MessagesModule {}
