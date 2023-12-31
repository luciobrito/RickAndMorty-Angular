import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonagensComponent } from './personagens/personagens.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'personagens', component: PersonagensComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
