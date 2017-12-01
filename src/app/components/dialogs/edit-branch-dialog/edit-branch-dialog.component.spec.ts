import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBranchDialogComponent } from './edit-branch-dialog.component';

describe('EditBranchDialogComponent', () => {
  let component: EditBranchDialogComponent;
  let fixture: ComponentFixture<EditBranchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBranchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBranchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
