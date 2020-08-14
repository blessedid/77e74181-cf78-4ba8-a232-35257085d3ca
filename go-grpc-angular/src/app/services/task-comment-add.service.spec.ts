import { TestBed } from '@angular/core/testing';

import { TaskCommentAddService } from './task-comment-add.service';

describe('TaskCommentAddService', () => {
  let service: TaskCommentAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskCommentAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
