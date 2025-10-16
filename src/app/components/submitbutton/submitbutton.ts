import { Component } from '@angular/core';
import {  inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-submitbutton',
  standalone: false,
  templateUrl: './submitbutton.html',
  styleUrl: './submitbutton.scss',
  providers: [MessageService],
})
export class Submitbutton {
    messageService = inject(MessageService);

    exampleForm: FormGroup | undefined;

    formSubmitted: boolean = false;

    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group({
            checked: ['', Validators.required]
        });
    }

    onSubmit() {
        this.formSubmitted = true;
        if (this.exampleForm && this.exampleForm.valid) {
            this.messageService&& this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form is submitted', life: 3000 });
            this.exampleForm.reset();
            this.formSubmitted = false;
        }
    }

    isInvalid(controlName: string) {
        const control = this.exampleForm&& this.exampleForm.get(controlName);
        return control?.invalid && (control.touched || this.formSubmitted);
    }

    OnVerify() {
        this.messageService&& this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Button is clicked', life: 3000 });
        this.formSubmitted = false;
    }
}
