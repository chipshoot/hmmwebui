import { Component } from '@angular/core';

@Component({
  selector: 'hmmapp-root',
  template: `<hmmnav-bar></hmmnav-bar>
  <div class="container-fluid">
  <gaslog-list></gaslog-list>
  </div>
  `
})
export class AppComponent {
  title = 'webui';
}
