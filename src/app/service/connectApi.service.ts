import { Injectable } from "@angular/core";
import { OpenAIApi } from "openai";
const { Configuration, openAIApi } = require("openai");


@Injectable ({
    providedIn : 'root'
})

export class ConnectApi{

   // inputText = '';
    //response = '';

  
    //constructor() {
    //  openai.apiKey = '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';
   // }
    
  
   // getResponse() {
   //   openai.Completion.create({
   //     prompt: this.inputText,
   //     model: 'text-davinci-002',
   //     temperature: 0.5,
   //   }).then((response: { choices: { text: string; }[]; }) => {
   //     this.response = response.choices[0].text;
   //   })}

      
}

const configuration = new Configuration({
    apiKey: process.env["OPENAI_API_KEY"],
  });
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: "Hello world",
  });
  console.log(completion.data.choices[0].text);
