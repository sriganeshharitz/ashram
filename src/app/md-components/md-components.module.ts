import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatNativeDateModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

@NgModule({
  exports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ClarityModule,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ]
})
export class MdComponentsModule { }
