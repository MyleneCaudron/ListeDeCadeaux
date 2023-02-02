import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OpenAiService } from '../open-ai.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  form!: FormGroup;
  newContact!:[]

  constructor(private formBuilder: FormBuilder,private httpClient: HttpClient, private serviceGpt : OpenAiService ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      prenom: [null, Validators.required],      
      genre: [null, Validators.required],
      age: [null, Validators.required],
      interets: [null, Validators.required],
     
  });
  }


  onSubmitForm() {

   const prenom = this.form.value.prenom;
   const sexe = this.form.value.sexe;
   const age = this.form.value.age;
   const interet = this.form.value.interet;

  


   this.serviceGpt.getDataFromOpenAI("Bonjour mon prénom est "+prenom+" je suis de sexe "+sexe+" ,j'ai "+age+" ans et je cherche un cadeau en relation avec ma passion : "+interet);



    console.log('Valid?', this.form.valid);
    console.log(this.form.value);
}
}