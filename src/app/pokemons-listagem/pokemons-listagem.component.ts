import { PokemonsService } from "./../pokemons.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pokemons-listagem",
  templateUrl: "./pokemons-listagem.component.html",
  styleUrls: ["./pokemons-listagem.component.css"]
})
export class PokemonsListagemComponent implements OnInit {
  pokemons: Array<any> = new Array();

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit() {
    this.listarPokemons();
  }

  listarPokemons() {
    this.pokemonsService
      .listarPokemons()
      .subscribe(detalhes => (this.pokemons = detalhes.result));
  }
}
