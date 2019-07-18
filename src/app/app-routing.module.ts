import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaCadComponent } from './tela-cad/tela-cad.component';

const routes: Routes = [
  {path: 'telaCadastro', component: TelaCadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
