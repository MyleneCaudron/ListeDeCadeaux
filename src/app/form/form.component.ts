import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OpenAiService } from '../open-ai.service';
import { ActivatedRoute, Router } from '@angular/router';
import { compileClassMetadata } from '@angular/compiler';
import { Cadeau } from '../model/cadeau.model';
import { ListComponent } from '../list/list.component';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  form!: FormGroup;
  reponseGpt!: string;
  listofGifts!: Cadeau[];

  constructor(private formBuilder: FormBuilder,private httpClient: HttpClient, 
    private serviceGpt : OpenAiService, private route: Router) { 



  
    }


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
   const sexe = this.form.value.genre;
   const age = this.form.value.age;
   const interet = this.form.value.interets;

  


   //this.serviceGpt.getDataFromOpenAI("Trouve moi une liste de cadeaux pour "+prenom+" , "+sexe+" ,qui a "+age+" ans et qui aime "+interet+"avec une description des cadeaux et le prix. .Le resultat en format json( nom(en minuscule), prix(en minuscule), descriptif(minuscule))");
console.log("Trouve moi une liste de cadeaux pour "+prenom+" , "+sexe+" ,qui a "+age+" ans et qui aime "+interet+"avec une description des cadeaux")


    console.log('Valid?', this.form.valid);
    console.log(this.form.value);
    let text="Trouve moi une liste de cadeaux pour "+prenom+" , "+sexe+" ,qui a "+age+" ans et qui aime "+interet+"avec une description des cadeaux en json(nom,detail,prix) en français"
    

    this.serviceGpt.getDataFromOpenAI(text).subscribe({

      next:(data)=>{ console.log(data);
        this.reponseGpt = data
        },
      complete: ()=>{

        this.listofGifts = JSON.parse(this.reponseGpt);

      }

        
      
      //console.log(this.reponseGptParse);
      //console.log(this.newCadeau[0].nomCadeau);
      // this.newCadeau=this.reponseGptParse;
      // this.newCadeau.nomCadeau;

  });
  }
}