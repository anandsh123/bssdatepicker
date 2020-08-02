import { Component, OnInit, TemplateRef, ViewChild, Input, ViewEncapsulation } from '@angular/core';
 import { NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
 
})
export class DayComponent   {

  @ViewChild('defaultDayTemplate', {static: true}) public defaultDayTemplate: TemplateRef<any>;
  
  @Input() highlightWeekend: boolean = false;

  constructor(private calendar: NgbCalendar) {
  }

  isDisabled = (date: NgbDate, current: {month: number, year: number}) => date.month !== current.month;
  isWeekend = (date: NgbDate) =>  this.calendar.getWeekday(date) >= 6;
}