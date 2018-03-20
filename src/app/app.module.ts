import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { AuthModule } from "./auth/auth.module";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { UserComponent } from './user/user.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ImageViewerModule } from '../../imageviewer';
import { IMAGEVIEWER_CONFIG, ImageViewerConfig } from '../../imageviewer';

import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { MediaModule } from './media/media.module';
import { OrderModule } from './order/order.module';
import { PageModule } from './page/page.module';
import { IMAGEVIEWER_CONFIG_DEFAULT } from '../../imageviewer/imageviewer.config';


// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,
    ],
    imports: [
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        UserModule,
        BookModule,
        PageModule,
        OrderModule,
        MediaModule,

        ThemeRoutingModule,
        AuthModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([AppEffects]),

        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        ImageViewerModule
    ],
    providers: [
        ScriptLoaderService,
        {
            provide: IMAGEVIEWER_CONFIG,
            useValue: IMAGEVIEWER_CONFIG_DEFAULT
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {


}