import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  Form!: FormGroup;
  newContact!:[]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.Form = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: [null, Validators.required],
      photo: [null, Validators.required],
      telephone: [null, [Validators.required , Validators.pattern('[0-9 ]{10}')]]
  });
  }

  onSubmitForm() {
    console.log('Valid?', this.Form.valid);
    console.log(this.Form.value);
}
}