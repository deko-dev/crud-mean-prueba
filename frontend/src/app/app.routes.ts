import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'usuario/:id', component: UsuarioComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
