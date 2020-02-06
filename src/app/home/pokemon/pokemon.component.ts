import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  info: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonsService
  ) {

    this.route.url.subscribe(url => {
      const segment: any = url[url.length - 1];
      this.getPokemonInfo(segment);

    })
  }

  ngOnInit() {
    const pokemonId = this.route.snapshot.paramMap.get('id');
    this.getPokemonInfo(pokemonId);
  }

  getPokemonInfo(pokemonId) {
    return this.pokemonService
      .pokemon(pokemonId).subscribe(response => {
        this.info = response;
      }, err => {
        console.log('Erro ao obeter dados do Pokemon.', err);
      });
  }

}
