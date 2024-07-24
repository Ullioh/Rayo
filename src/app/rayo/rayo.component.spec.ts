import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayoComponent } from './rayo.component';

describe('RayoComponent', () => {
  let component: RayoComponent;
  let fixture: ComponentFixture<RayoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RayoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RayoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
