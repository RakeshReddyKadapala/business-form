import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessformComponent } from './bussinessform.component';

describe('BussinessformComponent', () => {
  let component: BussinessformComponent;
  let fixture: ComponentFixture<BussinessformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinessformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BussinessformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
