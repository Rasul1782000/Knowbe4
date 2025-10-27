import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesPage } from './messages';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../../components/components-module';


@NgModule({
    declarations: [MessagesPage],
    imports: [CommonModule, FormsModule, TableModule, ButtonModule, HttpClientModule, ComponentsModule],
    exports: [MessagesPage]
})
export class MessagesComponentModule { }
