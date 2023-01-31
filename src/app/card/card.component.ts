import { Component, Input, OnInit } from '@angular/core';
import { Cadeau } from '../model/cadeau.model';

@Component({
  selector: 'app-home',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
 @Input() cadeau !: Cadeau;

 ngOnInit(): void {
 
 }
 
 }


