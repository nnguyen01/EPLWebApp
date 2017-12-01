import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateZoneDialogComponent } from './create-zone-dialog.component';

describe('CreateZoneDialogComponent', () => {
  let component: CreateZoneDialogComponent;
  let fixture: ComponentFixture<CreateZoneDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateZoneDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateZoneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
