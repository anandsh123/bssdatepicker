import { Component } from '@angular/core';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  today:Date = new Date();

  constructor(private _picker  : NgbDatepickerConfig) { 
    //this._picker.dayTemplate
  }
}
