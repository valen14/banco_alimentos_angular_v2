import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemporalComponent } from './temporal/temporal.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [TemporalComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TemporalComponent]
})
export class TemporalModule { }
