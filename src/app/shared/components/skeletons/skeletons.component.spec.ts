import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonsComponent } from './skeletons.component';

describe('SkeletonsComponent', () => {
  let component: SkeletonsComponent;
  let fixture: ComponentFixture<SkeletonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
