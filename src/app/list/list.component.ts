import { Component, Input } from '@angular/core';
import { Cadeau } from '../model/cadeau.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() listdeCadeaux !: Cadeau[];

}
