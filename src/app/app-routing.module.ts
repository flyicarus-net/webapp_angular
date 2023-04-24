import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { ItemComponent } from './pages/item/item.component';



const appRoutes: Routes = [
    { path:'inicio', component: InicioComponent},
    { path:'about', component: AboutComponent},
    { path:'portfolio', component: PortfolioComponent},
    { path:'terminos', component: TerminosComponent},
    { path:'portfolio/item', component: ItemComponent},
    { path:'inicio/item', component: ItemComponent }
];

@NgModule ({
    imports: [
    RouterModule.forRoot( appRoutes, {useHash:true})
    ],
    exports: [
    RouterModule
    ]
    })

export class AppRoutingModule { 
}