import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LancamentoCadastroComponent } from "./lancamentos/lancamento-cadastro/lancamento-cadastro.component";
import { LancamentoPesquisarComponent } from "./lancamentos/lancamento-pesquisar/lancamento-pesquisar.component";
import { PessoasCadastrarComponent } from "./pessoas/pessoas-cadastrar/pessoas-cadastrar.component";
import { PessoasPesquisarComponent } from "./pessoas/pessoas-pesquisar/pessoas-pesquisar.component";

const router: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'lancamento', component: LancamentoPesquisarComponent},
{path: 'lancamento/novo', component: LancamentoCadastroComponent},
{path: 'lancamento/:codigo', component: LancamentoCadastroComponent},
{path: 'pessoas', component: PessoasPesquisarComponent},
{path: 'pessoas/novo', component: PessoasCadastrarComponent},
{path: 'pessoas/:codigo', component: PessoasCadastrarComponent}



]

@NgModule({
  imports: [
    RouterModule.forRoot(router)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
