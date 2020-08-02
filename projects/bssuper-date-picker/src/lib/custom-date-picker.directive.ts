import { ChangeDetectorRef,Directive,ElementRef,Host,Renderer2, Input, TemplateRef, ViewContainerRef, ComponentFactoryResolver, ComponentRef, SimpleChanges} from '@angular/core';
import { NgControl } from '@angular/forms';
import {NgbInputDatepicker, NgbDateStruct, NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { DayTemplateContext } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-template-context';
import { DayComponent } from './day/day.component';


@Directive({
  selector: `input[ngbDatepicker]`,
})
export class CustomDatePickerDirective {
  @Input() option: any = {};

  @Input() disableWeekend: boolean = false;
  @Input() highlightWeekend: boolean = false;
  dayComp : ComponentRef<DayComponent>;
  isWeekendDisabled : any;

  model : NgbDateStruct;
  
  constructor(@Host() private _picker: NgbInputDatepicker ,
  private calendar: NgbCalendar,

      private _renderer: Renderer2,

      private _elRef: ElementRef,
      private _cfr: ComponentFactoryResolver,
      private _vcRef: ViewContainerRef
 
      ) { }

      ngOnChanges(changes: SimpleChanges) {
        if(!changes.option.isFirstChange()){
          this.dayComp.instance.highlightWeekend = changes.option.currentValue.highlightWeekend;
          this._picker.dayTemplate = this.dayComp.instance.defaultDayTemplate;
          
         
         if(changes.option.currentValue.disableWeekend){
           this.isWeekendDisabled = (date: NgbDate, current: {month: number}) => this.calendar.getWeekday(date) >= 6;
           this._picker.markDisabled = this.isWeekendDisabled;
         }
         else{
          this._picker.markDisabled = null;
         }
        }
      
      }
ngOnInit(){
 const cf = this._cfr.resolveComponentFactory(DayComponent);
 this.dayComp = this._vcRef.createComponent(cf);
 this.dayComp.instance.highlightWeekend = this.option.highlightWeekend;
 this._picker.dayTemplate = this.dayComp.instance.defaultDayTemplate;
 

if(this.option.disableWeekend){
  this.isWeekendDisabled = (date: NgbDate, current: {month: number}) => this.calendar.getWeekday(date) >= 6;
  this._picker.markDisabled = this.isWeekendDisabled;
}
 
}

}


