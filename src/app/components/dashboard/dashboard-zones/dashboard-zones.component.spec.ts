import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardZonesComponent } from './dashboard-zones.component';

describe('DashboardZonesComponent', () => {
  let component: DashboardZonesComponent;
  let fixture: ComponentFixture<DashboardZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardZonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
