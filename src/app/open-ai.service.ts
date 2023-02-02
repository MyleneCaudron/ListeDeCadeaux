import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { from, filter, map } from 'rxjs';
<<<<<<< HEAD
import { environment } from 'src/environments/environment';
=======
import { environment } from 'src/environments/environment.development';
>>>>>>> 32c1ad377f7f27de450e9aa77c58c7d674831299


@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

<<<<<<< HEAD
  constructor() { }
=======
  reponseGpt !: string;


  constructor() { }
  
>>>>>>> 32c1ad377f7f27de450e9aa77c58c7d674831299

  readonly configuration = new Configuration({
    apiKey: environment.openAIToken
  });
  readonly openai = new OpenAIApi(this.configuration);

<<<<<<< HEAD
=======
  

>>>>>>> 32c1ad377f7f27de450e9aa77c58c7d674831299
  getDataFromOpenAI(text: string) {
    from(this.openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
      max_tokens: 256
    })).pipe(
      filter(resp => !!resp && !!resp.data),
      map(resp => resp.data),
      filter((data: any) => data.choices && data.choices.length > 0 && data.choices[0].text),
      map(data => data.choices[0].text)
    ).subscribe(data => {
        console.log(data);
<<<<<<< HEAD
=======
        this.reponseGpt = JSON.stringify(data);
>>>>>>> 32c1ad377f7f27de450e9aa77c58c7d674831299
    });
  }


<<<<<<< HEAD
  
=======
>>>>>>> 32c1ad377f7f27de450e9aa77c58c7d674831299
}
