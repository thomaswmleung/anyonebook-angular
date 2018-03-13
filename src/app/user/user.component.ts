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
        imgUrl: "https://storage.googleapis.com/uploadedpages-bucket-180312/Mock100_6A/SC/PDF/Mock100_6A_10.pdf"
    };
    constructor(public translate: TranslateService) {
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            console.log('Language changed to ' + this.translate.currentLang);
        });
    }
    ngOnInit() {
    }

}
