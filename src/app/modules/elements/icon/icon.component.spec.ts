import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticIconComponent } from './icon.component';

describe('SemanticIconComponent', () => {
  let component: SemanticIconComponent;
  let fixture: ComponentFixture<SemanticIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanticIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanticIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
