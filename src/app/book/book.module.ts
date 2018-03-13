import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './book.reducer';
import * as fromBookPage from './book-page.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookPageEffects } from './book-page.effects';
import { BookEffects } from './book.effects';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('book', fromBook.reducer),
        StoreModule.forFeature('bookPage', fromBookPage.reducer),
        EffectsModule.forFeature([BookPageEffects, BookEffects])
    ],
    declarations: []
})
export class BookModule { }
