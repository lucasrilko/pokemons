
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: "root"
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  listarPokemons(): Observable<any> {
    return this.http.get(environment.apiUrl);
  }

  pokemon(pokemonID): Observable<any> {
    return this.http.get(`${environment.apiUrl}${pokemonID}`);
  }


  
}
