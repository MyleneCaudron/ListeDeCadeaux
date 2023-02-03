import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cadeau } from '../model/cadeau.model';

@Component({
  selector: 'app-home',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
 @Input() cadeau !: Cadeau;

 constructor(private route: ActivatedRoute) {
}

ngOnInit(): void {
    //const Identifiant = this.route.snapshot.params['liste'];
}
 
 }


