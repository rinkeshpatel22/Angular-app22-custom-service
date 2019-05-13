import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { DemoService } from '../services/demo.service';

@NgModule({
  declarations: [DemoComponent],
  exports: [DemoComponent],
  providers: [DemoService],
  imports: [
    CommonModule
  ]
})
export class DemoModule { }
