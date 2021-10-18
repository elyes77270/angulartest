import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {path:"user",component:FormulaireComponent},
  {path:"view-user",component:ViewUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
