import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardQuestionsComponent } from './dashboard-questions.component';

describe('DashboardQuestionsComponent', () => {
  let component: DashboardQuestionsComponent;
  let fixture: ComponentFixture<DashboardQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
