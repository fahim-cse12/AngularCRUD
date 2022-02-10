import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Key } from 'protractor';

@Directive({
  selector: '[appSelectRequiredValidation]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CustomValidationDirective,
    multi: true
  }]
})
export class CustomValidationDirective implements Validator {
  @Input()
  appSelectRequiredValidation!: string;
  validate(control: AbstractControl): {[key: string]: any} | null {
      return control.value === this.appSelectRequiredValidation ? {'defaultSelected': true}: null;
  }

  constructor() { }

}
