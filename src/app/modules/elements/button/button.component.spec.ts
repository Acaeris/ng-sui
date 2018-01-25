import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticButtonComponent } from './button.component';

describe('SemanticButtonComponent', () => {
  let component: SemanticButtonComponent;
  let fixture: ComponentFixture<SemanticButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanticButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanticButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
