import { Component } from '@angular/core';

@Component({
  selector: 'hmmapp-root',
  template: `<h2>Home made message</h2>
  <gaslog-comp></gaslog-comp>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webui';
}
