import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsListagemComponent } from './pokemons-listagem.component';

describe('PokemonsListagemComponent', () => {
  let component: PokemonsListagemComponent;
  let fixture: ComponentFixture<PokemonsListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
