# bssdatepicker
This angular application is an extension of bootstrap angular date picker. You can highlight and disable weekend in your bootstrap date picker.
 
Online demo is [here](https://anandsh123.github.io/bssdatepicker/)

 
## Installation

To install this component to an external project, follow the procedure:

1. __npm install bssuper-date-picker --save__

2. Add __BSSuperDatePickerModule__  to import array of your __@NgModule__ like below example :
    
 ```
    
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { BSSuperDatePickerModule } from 'bssuper-date-picker';
 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    BSSuperDatePickerModule
  ],
  providers: [NgbDatepicker],
  bootstrap: [AppComponent]
})
export class AppModule { }
 ```
Note : I consider you already have installed the bootstrap module and imported like above example,because this __BSSuperDatePickerModule__ module workes on bootstrap date picker.

## Usage
Just set the __option__ attribute in your existing bootstrap date picker as below :

app.component.ts file --

 ```
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'  
})
export class AppComponent {
  title = 'my-app';
  disableWeekend = true;
  highlightWeekend = true;
   
}
 ```

app.component.html file --
'''
 
       <input type="text" ngbDatepicker  #d="ngbDatepicker" [option]="{disableWeekend : disableWeekend,
        highlightWeekend :highlightWeekend}"   />
       <button (click)="d.toggle()"><i class='fas fa-calendar-alt'></i></button>
'''       
Set the value in __disableWeekend__ and   __highlightWeekend__  property of __option__ attributes.   

