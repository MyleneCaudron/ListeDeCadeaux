import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cadeau } from '../model/cadeau.model';
import { OpenAiService } from '../open-ai.service';

@Component({
  selector: 'app-card-liste',
  templateUrl: './card-liste.component.html',
  styleUrls: ['./card-liste.component.scss']
})
export class CardListeComponent {

  gift!:Cadeau[];

@Input()listcadeau!:Cadeau[];

  constructor( private service:OpenAiService, private route: ActivatedRoute) {
  }
}
