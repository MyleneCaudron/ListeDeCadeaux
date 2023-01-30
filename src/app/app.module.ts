import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,

    FormsModule,
    ReactiveFormsModule,
   
    RouterModule.forRoot([
      {path:'', pathMatch: 'full', redirectTo: 'home'},
      {path: 'home', component : HomeComponent},
      { path: 'formulaire', component: FormComponent },



    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
