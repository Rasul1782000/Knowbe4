import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-reactivesubmitform',
  standalone: false,
  templateUrl: './reactivesubmitform.html',
  styleUrl: './reactivesubmitform.scss',
  providers: [MessageService],
})
export class ReactivesubmitformComponent {

    messageService = inject(MessageService);

    items: any[] | undefined;

    exampleForm: FormGroup | undefined;

    formSubmitted: boolean = false;

    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group({
            address: ['', Validators.required]
        });
    }

    onSubmit() {
        this.formSubmitted = true;
        if (this.exampleForm && this.exampleForm.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form is submitted', life: 3000 });
            this.exampleForm.reset();
            this.formSubmitted = false;
        }
    }

    isInvalid(controlName: string) {
        const control = this.exampleForm&& this.exampleForm.get(controlName);
        return control?.invalid && (control.touched || this.formSubmitted);
    }
}
