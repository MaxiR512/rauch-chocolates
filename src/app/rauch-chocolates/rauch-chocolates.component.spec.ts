import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RauchChocolatesComponent } from './rauch-chocolates.component';

describe('RauchChocolatesComponent', () => {
  let component: RauchChocolatesComponent;
  let fixture: ComponentFixture<RauchChocolatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RauchChocolatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RauchChocolatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
