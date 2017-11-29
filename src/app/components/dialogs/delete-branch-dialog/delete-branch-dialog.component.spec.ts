import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBranchDialogComponent } from './delete-branch-dialog.component';

describe('DeleteBranchDialogComponent', () => {
  let component: DeleteBranchDialogComponent;
  let fixture: ComponentFixture<DeleteBranchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBranchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBranchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
