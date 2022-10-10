import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceFunComponent } from './space-fun.component';

describe('SpaceFunComponent', () => {
  let component: SpaceFunComponent;
  let fixture: ComponentFixture<SpaceFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceFunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
