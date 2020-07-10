import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioListagemComponent } from './usuario-listagem/usuario-listagem.component';


const routes: Routes = [
  { path: 'cadastro', component: UsuarioCadastroComponent },
  { path: 'listagem', component: UsuarioListagemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
