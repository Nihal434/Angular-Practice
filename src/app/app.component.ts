import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstAngularProject';

  obj = {
    "name":"RAm",
  }
  num=90;
  wantsToDisable = false;
  wantsToDisable2 = false;
}
