import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsDetalhesComponent } from './pokemons-detalhes.component';

describe('PokemonsDetalhesComponent', () => {
  let component: PokemonsDetalhesComponent;
  let fixture: ComponentFixture<PokemonsDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
