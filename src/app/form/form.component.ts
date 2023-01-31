import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  Form!: FormGroup;
  newContact!:[]

  constructor(private formBuilder: FormBuilder,private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.Form = this.formBuilder.group({
      prenom: [null, Validators.required],      
      genre: [null, Validators.required],
      age: [null, Validators.required],
      interets: [null, Validators.required],
     
  });
  }

  onSubmitForm() {
    //chercher la requete api specifique
    console.log('Valid?', this.Form.valid);
    console.log(this.Form.value);
}
}