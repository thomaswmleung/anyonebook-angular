import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { BookPage } from './book-page.model';

export enum BookPageActionTypes {
    LoadBookPages = '[BookPage] Load BookPages',
    AddBookPage = '[BookPage] Add BookPage',
    UpsertBookPage = '[BookPage] Upsert BookPage',
    AddBookPages = '[BookPage] Add BookPages',
    UpsertBookPages = '[BookPage] Upsert BookPages',
    UpdateBookPage = '[BookPage] Update BookPage',
    UpdateBookPages = '[BookPage] Update BookPages',
    DeleteBookPage = '[BookPage] Delete BookPage',
    DeleteBookPages = '[BookPage] Delete BookPages',
    ClearBookPages = '[BookPage] Clear BookPages'
}

export class LoadBookPages implements Action {
    readonly type = BookPageActionTypes.LoadBookPages;

    constructor(public payload: { bookPages: BookPage[] }) { }
}

export class AddBookPage implements Action {
    readonly type = BookPageActionTypes.AddBookPage;

    constructor(public payload: { bookPage: BookPage }) { }
}

export class UpsertBookPage implements Action {
    readonly type = BookPageActionTypes.UpsertBookPage;

    constructor(public payload: { bookPage: Update<BookPage> }) { }
}

export class AddBookPages implements Action {
    readonly type = BookPageActionTypes.AddBookPages;

    constructor(public payload: { bookPages: BookPage[] }) { }
}

export class UpsertBookPages implements Action {
    readonly type = BookPageActionTypes.UpsertBookPages;

    constructor(public payload: { bookPages: Update<BookPage>[] }) { }
}

export class UpdateBookPage implements Action {
    readonly type = BookPageActionTypes.UpdateBookPage;

    constructor(public payload: { bookPage: Update<BookPage> }) { }
}

export class UpdateBookPages implements Action {
    readonly type = BookPageActionTypes.UpdateBookPages;

    constructor(public payload: { bookPages: Update<BookPage>[] }) { }
}

export class DeleteBookPage implements Action {
    readonly type = BookPageActionTypes.DeleteBookPage;

    constructor(public payload: { id: string }) { }
}

export class DeleteBookPages implements Action {
    readonly type = BookPageActionTypes.DeleteBookPages;

    constructor(public payload: { ids: string[] }) { }
}

export class ClearBookPages implements Action {
    readonly type = BookPageActionTypes.ClearBookPages;
}

export type BookPageActions =
    LoadBookPages
    | AddBookPage
    | UpsertBookPage
    | AddBookPages
    | UpsertBookPages
    | UpdateBookPage
    | UpdateBookPages
    | DeleteBookPage
    | DeleteBookPages
    | ClearBookPages;
