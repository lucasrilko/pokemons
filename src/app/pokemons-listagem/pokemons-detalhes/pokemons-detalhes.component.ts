import { PokemonsService } from './../../pokemons.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemons-detalhes',
  templateUrl: './pokemons-detalhes.component.html',
  styleUrls: ['./pokemons-detalhes.component.css']
})
export class PokemonsDetalhesComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

 
  pokemonUrl: String;
  pokemonInfo = {name};

  private router = ActivatedRoute;
  route: any;

  constructor(private_pokemonsService: PokemonsService) {}

  
     // pega a informacao da url que o compoennte pai passou.
  //    this.pokemonUrl = "retorno da variavel que o componente pai passou"
  // // 

   
  //   this.route
  //   .queryParams
  //   .subscribe(params => {
  //     let pokemonUrl = params['url'];
  //     let pokemonInfo = params['name'];
  //   })
   // faz a requisicao pra api

   // coloca o resultado da api na variavel pokemonInfo 
   // no html use os valores do pokemonInfo pra exibir os dados do pokemon
  }