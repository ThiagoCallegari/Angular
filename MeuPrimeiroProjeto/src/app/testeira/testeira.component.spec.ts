import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteiraComponent } from './testeira.component';

describe('TesteiraComponent', () => {
  let component: TesteiraComponent;
  let fixture: ComponentFixture<TesteiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
