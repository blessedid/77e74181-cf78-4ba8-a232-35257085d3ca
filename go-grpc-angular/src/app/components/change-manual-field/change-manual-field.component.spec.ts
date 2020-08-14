import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeManualFieldComponent } from './change-manual-field.component';

describe('ChangeManualFieldComponent', () => {
  let component: ChangeManualFieldComponent;
  let fixture: ComponentFixture<ChangeManualFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeManualFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeManualFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
