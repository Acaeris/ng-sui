import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticHeaderComponent } from './header.component';

describe('SemanticHeaderComponent', () => {
  let component: SemanticHeaderComponent;
  let fixture: ComponentFixture<SemanticHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanticHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanticHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
