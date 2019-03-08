import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html'
})
export class FormComponent {

    @Input() attributes: any;

}
