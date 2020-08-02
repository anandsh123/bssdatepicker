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
