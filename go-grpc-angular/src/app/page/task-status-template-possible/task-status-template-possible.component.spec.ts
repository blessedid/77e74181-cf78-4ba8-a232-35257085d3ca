import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatusTemplatePossibleComponent } from './task-status-template-possible.component';

describe('TaskStatusTemplatePossibleComponent', () => {
  let component: TaskStatusTemplatePossibleComponent;
  let fixture: ComponentFixture<TaskStatusTemplatePossibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStatusTemplatePossibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStatusTemplatePossibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
