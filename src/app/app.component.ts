import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="whole-page" style="height: 100%">
    <app-fcc-root></app-fcc-root>
  </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Factorio Quality Calculator';
}
