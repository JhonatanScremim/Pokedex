import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPokemonPersonalComponent } from './new-pokemon-personal.component';

describe('NewPokemonPersonalComponent', () => {
  let component: NewPokemonPersonalComponent;
  let fixture: ComponentFixture<NewPokemonPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPokemonPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPokemonPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
