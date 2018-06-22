import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center"><h1>Marvellous Infosystem</h1> <input type="text"></div>`,
  styles: ["input[type=text]{border: 2px solid blue}"]
})
export class AppComponent {
  title = 'EighthAngular';
}
