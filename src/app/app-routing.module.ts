import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path : 'formulaire', component : FormComponent },
  {path : '', redirectTo: '/formulaire', pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
