import { sandboxOf } from 'angular-playground';
import { SharedModule } from './../../shared/shared.module';
import { SteppersComponent } from './steppers.component';

export default sandboxOf(SteppersComponent, {
  imports: [],
  declarations: [SteppersComponent]
}).add('Steppers Component', {
  template: `<app-steppers></app-steppers>`
});
