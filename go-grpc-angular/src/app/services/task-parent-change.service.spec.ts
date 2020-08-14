import { TestBed } from '@angular/core/testing';

import { TaskParentChangeService } from './task-parent-change.service';

describe('TaskParentChangeService', () => {
  let service: TaskParentChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskParentChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
