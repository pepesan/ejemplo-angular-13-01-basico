import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent implements OnInit {

  name: FormControl;
  profileForm: FormGroup;

  constructor() {
    this.name = new FormControl();
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }

  ngOnInit(): void {

  }

  cambiaInput() {
    this.name.setValue("Pepe");
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  cambiaInput2() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      lastName: 'Pelosy'
    });
  }
}
