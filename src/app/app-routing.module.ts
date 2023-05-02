//Modulos
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

//Componentes
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { ItemComponent } from './pages/item/item.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';



const appRoutes: Routes = [
    { path:'', component: PortfolioComponent},  //RUTA PRINCIPAL
    { path:'about', component: AboutComponent},
    { path:'terminos', component: TerminosComponent},
    { path:'item', component: ItemComponent},
    { path:'proyectos', component: ProyectosComponent},
    { path:'contacto', component: ContactoComponent},

    { path:'**', pathMatch: 'full', redirectTo: '' },
];

@NgModule ({
    imports: [
    RouterModule.forRoot( appRoutes, {useHash:true} )
    ],
    exports: [
    RouterModule
    ]
    })

export class AppRoutingModule { 
}