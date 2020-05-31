import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { DayTemplateContext } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-template-context';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent   {

  @ViewChild('defaultDayTemplate', {static: true}) public defaultDayTemplate: TemplateRef<DayTemplateContext>;
  
  @Input() highlightWeekend: boolean = false;

  constructor(private calendar: NgbCalendar) {
  }

  isDisabled = (date: NgbDate, current: {month: number, year: number}) => date.month !== current.month;
  isWeekend = (date: NgbDate) =>  this.calendar.getWeekday(date) >= 6;
}