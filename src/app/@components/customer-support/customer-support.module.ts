import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSupportComponent } from './customer-support.component';

@NgModule({
  declarations: [
    CustomerSupportComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CustomerSupportComponent],
})
export class CustomerSupportModule { }
