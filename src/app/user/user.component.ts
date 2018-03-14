import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { JsonPipe } from '@angular/common';
@Component({
    selector: 'app-user',
    templateUrl: "user.component.html",
    styles: []
})
export class UserComponent implements OnInit {
    param = {
        // imgUrl: 'http://www.pkmachinery.com/d/pic/faq20170324%E8%B5%B7/vibrating-feeder.jpg'
        imgUrl: "https://hallysonh.github.io/ngx-imageviewer/pdf-test.pdf",
        docFile: File
    };

    constructor(public translate: TranslateService) {
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            console.log('Language changed to ' + this.translate.currentLang);
        });
    }

    ngOnInit() {
    }

    uploadFile() {

    }

}
