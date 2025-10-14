import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Messages } from './messages';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../../components/components-module';


@NgModule({
    declarations: [Messages],
    imports: [CommonModule, FormsModule, TableModule, ButtonModule, HttpClientModule, ComponentsModule],
    exports: [Messages]
})
export class MessagesComponentModule { }
