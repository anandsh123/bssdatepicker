import { NgModule } from '@angular/core';

import { DayComponent } from './day/day.component';
import { CustomDatePickerDirective } from './custom-date-picker.directive';



@NgModule({
  declarations: [DayComponent, CustomDatePickerDirective],
  imports: [
  ],
  exports: [DayComponent,CustomDatePickerDirective]
})
export class BSSuperDatePickerModule { }
