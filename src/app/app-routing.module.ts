import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path : 'formulaire', component : FormComponent },
  {path : '', redirectTo: '/formulaire', pathMatch:'full'},
  {path : 'cadeaux', component : CardComponent },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
