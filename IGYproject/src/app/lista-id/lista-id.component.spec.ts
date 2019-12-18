import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIdComponent } from './lista-id.component';

describe('ListaIdComponent', () => {
  let component: ListaIdComponent;
  let fixture: ComponentFixture<ListaIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
