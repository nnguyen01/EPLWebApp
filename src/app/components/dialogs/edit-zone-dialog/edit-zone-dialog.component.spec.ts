import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditZoneDialogComponent } from './edit-zone-dialog.component';

describe('ZoneDialogComponent', () => {
  let component: EditZoneDialogComponent;
  let fixture: ComponentFixture<EditZoneDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditZoneDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditZoneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
