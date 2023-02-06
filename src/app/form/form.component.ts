import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OpenAiService } from '../open-ai.service';
import { ActivatedRoute, Router } from '@angular/router';
import { compileClassMetadata } from '@angular/compiler';
import { Cadeau } from '../model/cadeau.model';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  gift!: Cadeau[];

  form!: FormGroup;
  reponseGpt!: string;
  @Input()listofGifts!: Cadeau[];


  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private serviceGpt: OpenAiService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      prenom: ['', Validators.required],
      genre: ['', Validators.required],
      age: ['', Validators.required],
      interets: ['', Validators.required],
      prix: ['', Validators.required],
    });
  }

  ImageGenerator (){
    
    for(let i=0; i<this.listofGifts.length; i++ ){

      this.listofGifts[i].image=
      this.serviceGpt.getImage(this.listofGifts[i].detail);
    }

  }

  toggle = true;
status = 'Enable'; 

enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
}

  onSubmitForm() {
    const prenom = this.form.value.prenom;
    const sexe = this.form.value.genre;
    const age = this.form.value.age;
    const interet = this.form.value.interets;
    const prix = this.form.value.prix;

    console.log(
      'Trouve moi une liste de 6 cadeaux pour ' +
        prenom +
        ' , ' +
        sexe +
        ' ,qui a ' +
        age +
        ' ans et qui aime ' +
        interet +
        ' avec une description des cadeaux en json(nom,detail,prix) en français'
    );

    console.log('Valid?', this.form.valid);
    console.log(this.form.value);
    let text =
      'Trouve moi une liste de 6 cadeaux pour ' +
      prenom +
      ' , ' +
      sexe +
      ' ,qui a ' +
      age +
      ' ans et qui aime ' +
      interet +
      ' avec une description des cadeaux en json(nom,detail,prix) en français, pour un prix maximum de' +
      prix +
      'euros';

    this.serviceGpt.getDataFromOpenAI(text).subscribe({
      next: (data) => {
        console.log(data);
        this.reponseGpt = data;
      },
      complete: () => {
        this.listofGifts = JSON.parse(this.reponseGpt);
        for(let i=0; i<this.listofGifts.length; i++ ){

          this.listofGifts[i].image=
          this.serviceGpt.getImage(this.listofGifts[i].detail);
          console.log("=============" +this.listofGifts[i].image)
        }
      },
    });
  }
}
