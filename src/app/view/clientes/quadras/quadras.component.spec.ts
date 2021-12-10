import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadrasComponent } from './quadras.component';

describe('QuadrasComponent', () => {
  let component: QuadrasComponent;
  let fixture: ComponentFixture<QuadrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
