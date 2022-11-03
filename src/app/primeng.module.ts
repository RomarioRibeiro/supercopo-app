import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LancamentoPesquisarComponent } from "./lancamentos/lancamento-pesquisar/lancamento-pesquisar.component";
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { NavBarComponent } from "./core/nav-bar/nav-bar.component";

import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {MultiSelectModule} from 'primeng/multiselect';
import {SelectButtonModule} from 'primeng/selectbutton';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { AccordionModule } from 'primeng/accordion'; // accordion and accordion tab
import { MenuItem } from 'primeng/api';
import { TabViewModule } from 'primeng/tabview';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { PessoasPesquisarComponent } from './pessoas/pessoas-pesquisar/pessoas-pesquisar.component';
import { PessoasCadastrarComponent } from './pessoas/pessoas-cadastrar/pessoas-cadastrar.component';


@NgModule({
  declarations:[
    LancamentoPesquisarComponent,
    NavBarComponent,
    LancamentoCadastroComponent,
    PessoasPesquisarComponent,
    PessoasCadastrarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule,
    RouterModule,
    InputTextModule,
    CalendarModule,
    TableModule,
    TooltipModule,
    MultiSelectModule,
    SelectButtonModule,
    MessageModule,
    MessagesModule,
    AccordionModule,
    TabViewModule,
    FormsModule,
    InputNumberModule,
    DropdownModule,
    InputTextareaModule


  ],
  exports: [
    LancamentoPesquisarComponent,
    NavBarComponent,
    LancamentoCadastroComponent,
    PessoasPesquisarComponent,
    PessoasCadastrarComponent
  ]
})

export class PrimengModule{}
