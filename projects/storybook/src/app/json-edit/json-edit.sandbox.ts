import { sandboxOf } from 'angular-playground';
import { JSONEditComponent } from './json-edit.component';
import { AccordionComponent } from './accordion/accordion.component';
import { FormComponent } from './form/form.component';

export default sandboxOf(JSONEditComponent, {
    imports: [],
    declarations: [JSONEditComponent, AccordionComponent, FormComponent]
}).add('JSON Edit Component', {
    template: `<app-json-edit></app-json-edit>`
});
