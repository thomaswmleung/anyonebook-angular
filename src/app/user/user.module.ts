import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user.effects';

import { UserComponent } from './user.component'
import { TranslateModule } from '@ngx-translate/core';
import { ImageViewerModule } from '../../../imageviewer';


@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('user', fromUser.reducer),
        EffectsModule.forFeature([UserEffects]),
        TranslateModule.forChild(),
        ImageViewerModule
    ],
    exports: [UserComponent, TranslateModule, ImageViewerModule],
    declarations: [UserComponent],
    entryComponents: [UserComponent],
})
export class UserModule { }
