import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadComponent } from './tela-cad.component';

describe('TelaCadComponent', () => {
  let component: TelaCadComponent;
  let fixture: ComponentFixture<TelaCadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaCadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
