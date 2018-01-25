import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticDividerComponent } from './divider.component';

describe('SemanticDividerComponent', () => {
  let component: SemanticDividerComponent;
  let fixture: ComponentFixture<SemanticDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanticDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanticDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
