import { TestBed } from '@angular/core/testing';

import { MyFunctionService } from './my-function.service';

describe('MyFunctionService', () => {
  let service: MyFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
