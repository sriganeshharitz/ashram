import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatNativeDateModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  exports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule
  ]
})
export class MdComponentsModule { }
