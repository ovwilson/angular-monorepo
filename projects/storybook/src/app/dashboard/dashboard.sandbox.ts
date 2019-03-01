import { sandboxOf } from 'angular-playground';
import { DashboardComponent } from './dashboard.component';

export default sandboxOf(DashboardComponent, {
  imports: [],
  declarations: [DashboardComponent]
}).add('Dashboard Component', {
  template: `<app-dashboard></app-dashboard>`
});
