import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  userForm: FormGroup;
  nomineeForm: FormGroup;
  addressFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.createNomineeForm();
    // this.addNominee();
  }

  ngOnInit() {
    this.createUserForm();
    this.addAddress();
  }
  createUserForm() {
    this.userForm = this.fb.group({
      customerDetails: this.fb.group({
        fullName: '',
        email: '',
        mobile: ''
      }),
      addressDetails:  this.fb.array([])
    })
  }
  get addressForm(): FormArray  {
      return this.userForm.get('addressDetails') as FormArray;
  }
  addAddress() {
    this.addressFormGroup = this.fb.group({
      addressLine: ['']
    });
    this.addressForm.push(this.addressFormGroup);
  }
  saveDetails(value) {
    console.log(value);
  }
  removeLine(i) {
        this.addressForm.removeAt(i);
  }
}
