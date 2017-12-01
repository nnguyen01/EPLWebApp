import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuestionDialogComponent } from './edit-question-dialog.component';

describe('EditQuestionDialogComponent', () => {
  let component: EditQuestionDialogComponent;
  let fixture: ComponentFixture<EditQuestionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQuestionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuestionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
