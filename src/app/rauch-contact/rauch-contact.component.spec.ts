import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RauchContactComponent } from './rauch-contact.component';

describe('RauchContactComponent', () => {
  let component: RauchContactComponent;
  let fixture: ComponentFixture<RauchContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RauchContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RauchContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
