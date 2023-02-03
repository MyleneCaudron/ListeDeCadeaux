import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListeComponent } from './card-liste.component';

describe('CardListeComponent', () => {
  let component: CardListeComponent;
  let fixture: ComponentFixture<CardListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
