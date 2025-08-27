import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardImoveisComponent } from './dashboard-imoveis-component';

describe('DashboardImoveisComponent', () => {
  let component: DashboardImoveisComponent;
  let fixture: ComponentFixture<DashboardImoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardImoveisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardImoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
