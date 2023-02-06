import { Injectable, Input } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { from, filter, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Cadeau } from './model/cadeau.model';


@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  reponseGpt !: string;
  reponseGptParse !:Cadeau[];
  //@Input()gift!:Cadeau;
  a!:string[];
  j!:number;
  newCadeau!:Cadeau[];

  constructor() { }
  

  readonly configuration = new Configuration({
    apiKey: environment.openAIToken
  });
  readonly openai = new OpenAIApi(this.configuration);

 

  getDataFromOpenAI(text: string) {
    return from(this.openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
      max_tokens: 4000
    })).pipe(
      filter(resp => !!resp && !!resp.data),
      map(resp => resp.data),
      filter((data: any) => data.choices && data.choices.length > 0 && data.choices[0].text),
      map(data => data.choices[0].text)

    );
  }

}