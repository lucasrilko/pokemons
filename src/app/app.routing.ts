import { Routes, RouterModule } from "@angular/router";
import { PokemonsListagemComponent } from "./pokemons-listagem/pokemons-listagem.component";
import { PokemonsDetalhesComponent } from "./pokemons-listagem/pokemons-detalhes/pokemons-detalhes.component";
import { ModuleWithProviders } from "@angular/core";

const APP_ROUTES: Routes = [
  {
    path: "",
    component: PokemonsListagemComponent,
    children: [
      {
        path: "detalhes",
        component: PokemonsDetalhesComponent
      }
    ]
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
