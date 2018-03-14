import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AppComponent } from '../app.component';

@NgModule({
    imports: [
        CommonModule,
        AngularFireModule.initializeApp(environment.config),
        AngularFirestoreModule,
        AngularFireStorageModule
    ],
    declarations: []

})
export class MediaModule { }
