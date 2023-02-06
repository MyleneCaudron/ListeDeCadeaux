import { Injectable, Input } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { from, filter, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Cadeau } from './model/cadeau.model';

@Injectable({
  providedIn: 'root',
})
export class OpenAiService {
  reponseGpt!: string;
  reponseGptParse!: Cadeau[];
  responseImg!: string;
  //@Input()gift!:Cadeau;
  a!: string[];
  j!: number;
 @Input()newCadeau!: Cadeau[];

  constructor() {}

  readonly configuration = new Configuration({
    apiKey: environment.openAIToken,
  });
  readonly openai = new OpenAIApi(this.configuration);

  async getImage(text: string) {
    const reponseImg = await this.openai.createImage({
      prompt: text,
      n: 1,
      size: '1024x1024',
    });
    return reponseImg.data.data[0].url;
  }

  getDataFromOpenAI(text: string) {
    return from(
      this.openai.createCompletion({
        model: 'text-davinci-003',
        prompt: text,
        max_tokens: 4000,
        temperature: 0.5,
      })
    ).pipe(
      filter((resp) => !!resp && !!resp.data),
      map((resp) => resp.data),
      filter(
        (data: any) =>
          data.choices && data.choices.length > 0 && data.choices[0].text
      ),
      map((data) => data.choices[0].text)
    );
  }
}
