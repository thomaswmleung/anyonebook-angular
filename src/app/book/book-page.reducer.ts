import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BookPage } from './book-page.model';
import { BookPageActions, BookPageActionTypes } from './book-page.actions';

export interface State extends EntityState<BookPage> {
    // additional entities state properties
}

export const adapter: EntityAdapter<BookPage> = createEntityAdapter<BookPage>();

export const initialState: State = adapter.getInitialState({
    // additional entity state properties
});

export function reducer(
    state = initialState,
    action: BookPageActions
): State {
    switch (action.type) {
        case BookPageActionTypes.AddBookPage: {
            return adapter.addOne(action.payload.bookPage, state);
        }

        case BookPageActionTypes.UpsertBookPage: {
            return adapter.upsertOne(action.payload.bookPage, state);
        }

        case BookPageActionTypes.AddBookPages: {
            return adapter.addMany(action.payload.bookPages, state);
        }

        case BookPageActionTypes.UpsertBookPages: {
            return adapter.upsertMany(action.payload.bookPages, state);
        }

        case BookPageActionTypes.UpdateBookPage: {
            return adapter.updateOne(action.payload.bookPage, state);
        }

        case BookPageActionTypes.UpdateBookPages: {
            return adapter.updateMany(action.payload.bookPages, state);
        }

        case BookPageActionTypes.DeleteBookPage: {
            return adapter.removeOne(action.payload.id, state);
        }

        case BookPageActionTypes.DeleteBookPages: {
            return adapter.removeMany(action.payload.ids, state);
        }

        case BookPageActionTypes.LoadBookPages: {
            return adapter.addAll(action.payload.bookPages, state);
        }

        case BookPageActionTypes.ClearBookPages: {
            return adapter.removeAll(state);
        }

        default: {
            return state;
        }
    }
}

export const {
  selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
