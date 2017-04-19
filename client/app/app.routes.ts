import { ListagemComponent } from './listagem/listagem.component';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';

const appRoutes : Routes = [
    {path: "", component: ListagemComponent},
    {path: "cadastro", component: CadastroComponent},
    { path: '**', redirectTo: ''}
];
// informa quais rotas estão sendo criadas
export const routing = RouterModule.forRoot(appRoutes);