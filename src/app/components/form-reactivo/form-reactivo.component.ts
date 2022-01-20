import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent implements OnInit {

  name: FormControl;
  profileForm: FormGroup;
  profileForm2: FormGroup;
  constructor(private fb: FormBuilder) {
    this.name = new FormControl();
    this.profileForm = new FormGroup({
      firstName: new FormControl(
        '',
        [Validators.required,Validators.minLength(4)]),
      lastName: new FormControl(''),
    });
    this.profileForm2 = this.fb.group({
      firstName: ['',[Validators.required,Validators.minLength(4)]],
      lastName: [''],
    });
  }

  ngOnInit(): void {

  }

  cambiaInput() {
    this.name.setValue("Pepe");
  }

  onSubmit() {
    console.log("FormGroup");
    console.warn(this.profileForm.value);
    console.log("FormBuilder");
    console.warn(this.profileForm2.value);
  }

  cambiaInput2() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      lastName: 'Pelosy'
    });
  }
}
