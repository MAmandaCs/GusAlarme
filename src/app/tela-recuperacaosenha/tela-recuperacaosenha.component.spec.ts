import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaRecuperacaosenhaComponent } from './tela-recuperacaosenha.component';

describe('TelaRecuperacaosenhaComponent', () => {
  let component: TelaRecuperacaosenhaComponent;
  let fixture: ComponentFixture<TelaRecuperacaosenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaRecuperacaosenhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaRecuperacaosenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
