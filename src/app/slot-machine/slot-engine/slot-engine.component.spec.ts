import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotEngineComponent } from './slot-engine.component';

describe('SlotEngineComponent', () => {
  let component: SlotEngineComponent;
  let fixture: ComponentFixture<SlotEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotEngineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
