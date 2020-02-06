import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './home/pokemon/pokemon.component';

const APP_ROUTES: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "pokemon/:id",
        component: PokemonComponent
      }
    ]
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
