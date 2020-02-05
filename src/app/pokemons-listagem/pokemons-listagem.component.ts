import { PokemonsService } from "./../pokemons.service";
import { Component, OnInit, Input } from "@angular/core";
import { PokemonModel } from './pokemon.model';

@Component({
  selector: "app-pokemons-listagem",
  templateUrl: "./pokemons-listagem.component.html",
  styleUrls: ["./pokemons-listagem.component.css"]
})
export class PokemonsListagemComponent implements OnInit {


  @Input() detalhes;
  pokemon: PokemonModel = new PokemonModel();
  pokemons: Array<any> = new Array();
  pokemonId: String;


  constructor(private pokemonsService: PokemonsService) {

  }

  ngOnInit() {
    this.listarPokemons();
  }

  goToPokemonPage($event) {
    // this.router.navigate(['/name','url'], this.params.queryParams);
    // aqui voce vai fazer a troca de rota.
    //https://stackoverflow.com/a/38131376

    // a variavel $event contem a url das informa'coes do pokemon.
    // voc6e tem que passar pro componente que vai ser renderizado.

    console.log($event);
  }

  listarPokemons() {
    this.pokemonsService
      .listarPokemons().subscribe(response => {
        this.pokemons = response.results;
      }, err => {
          console.log('Erro ao listar os Pokemons', err);
      });
  }
}

// open(content) {
//   this.modalReference = this.modalService.open(content, {size: 'sm', backdrop: 'static'});
//   this.modalReference.result.then((result) => {
//     this.closeResult = `Closed with: ${result}`;
//   }, (reason) => {
//     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//   });
// }


