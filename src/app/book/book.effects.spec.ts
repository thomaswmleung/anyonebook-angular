import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { BookEffects } from './book.effects';

describe('BookService', () => {
    let actions$: Observable<any>;
    let effects: BookEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                BookEffects,
                provideMockActions(() => actions$)
            ]
        });

        effects = TestBed.get(BookEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
