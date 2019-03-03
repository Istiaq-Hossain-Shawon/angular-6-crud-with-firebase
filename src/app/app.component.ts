import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'star-admin-angular';
  constructor() {
    setTheme('bs3'); // or 'bs4'
  }
}
