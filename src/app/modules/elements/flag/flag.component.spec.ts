import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticFlagComponent } from './flag.component';

describe('SemanticFlagComponent', () => {
  let component: SemanticFlagComponent;
  let fixture: ComponentFixture<SemanticFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanticFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanticFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
