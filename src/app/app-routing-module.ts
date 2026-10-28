import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiperfilComponent } from './components/miperfil-component/miperfil-component';
import { LoginComponent } from './components/login-component/login-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "perfil", component: MiperfilComponent},
  {path: "subordinados", component: SubordinadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
