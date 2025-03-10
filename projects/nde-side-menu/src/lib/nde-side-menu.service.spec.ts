import { TestBed } from '@angular/core/testing';

import { NdeSideMenuService } from './nde-side-menu.service';

describe('NdeSideMenuService', () => {
  let service: NdeSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NdeSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
