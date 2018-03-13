import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { BookPageEffects } from './book-page.effects';

describe('BookPageService', () => {
  let actions$: Observable<any>;
  let effects: BookPageEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookPageEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(BookPageEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
