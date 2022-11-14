import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeListPersonalComponent } from './poke-list-personal.component';

describe('PokeListPersonalComponent', () => {
  let component: PokeListPersonalComponent;
  let fixture: ComponentFixture<PokeListPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeListPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeListPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
