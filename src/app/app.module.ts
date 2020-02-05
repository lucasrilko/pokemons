import { Routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PokemonsListagemComponent } from './pokemons-listagem/pokemons-listagem.component';
import { PokemonsService } from './pokemons.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { PokemonsDetalhesComponent } from './pokemons-listagem/pokemons-detalhes/pokemons-detalhes.component';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './nav/footer/footer.component';
import { HeaderComponent } from './nav/footer/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    PokemonsListagemComponent,
    PokemonsDetalhesComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSelectModule,
    Routing,
    MatCardModule,
    NgbModule

  ],
  providers: [PokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
