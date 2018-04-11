import { Directive } from '@angular/core';
import { NG_VALIDATORS, ValidatorFn, AbstractControl, Validator } from '@angular/forms';

// This is a custom validator to make sure that the entered date is not of the future

// This function returns a validator function which accepts the form control as the parameter.
// The value property of the control contains the entered date in the form of a string.
// A new date object is constructed from that string and is compared with the current date.
// Returns null to indicate if the date is of the present or past.
// Returns an object with an errormessage if the date is of the future.

function dateOfThePastValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    return new Date(control.value) < new Date() ? null : {'dateOfThePast': 'Must be a proper date!'};
  };
}

// This directive makes use of the above built validator function.
// The selector specifies that it is used an attribute along with ngModel attribute.
// In the providers array, we are specifying to add this directive to the existing list of validators.

@Directive({
  selector: '[dateOfThePast][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateOfThePastDirective,
      multi: true
    }
  ]
})

// The class implements Validator interface to be recognised as a validator and should override the validate method
export class DateOfThePastDirective implements Validator {
  validator = dateOfThePastValidator();
  validate(control: AbstractControl): { [key: string]: any; } {
    return this.validator(control);
  }
  constructor() { }

}
