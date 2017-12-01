import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneDialogComponent } from './zone-dialog.component';

describe('ZoneDialogComponent', () => {
  let component: ZoneDialogComponent;
  let fixture: ComponentFixture<ZoneDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
