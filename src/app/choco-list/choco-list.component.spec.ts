import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocoListComponent } from './choco-list.component';

describe('ChocoListComponent', () => {
  let component: ChocoListComponent;
  let fixture: ComponentFixture<ChocoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChocoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChocoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
