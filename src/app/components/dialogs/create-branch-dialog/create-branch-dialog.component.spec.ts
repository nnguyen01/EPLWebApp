import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBranchDialogComponent } from './create-branch-dialog.component';

describe('CreateBranchDialogComponent', () => {
  let component: CreateBranchDialogComponent;
  let fixture: ComponentFixture<CreateBranchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBranchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBranchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
