import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private pokemonService: PokemonsService,
    private router: Router
  ) { }
  pokemons: Array<any> = new Array();

  ngOnInit() {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonService
      .listarPokemons().subscribe(response => {
        this.pokemons = response.results;
      }, err => {
        console.log('Erro ao listar os Pokemons', err);
      });
  }

  goToPokemonPage(event) {
    this.router.navigate(['/pokemon', event.value]);
  }

}
