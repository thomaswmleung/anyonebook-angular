import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { JsonPipe } from '@angular/common';
@Component({
    selector: 'app-user',
    //   template: `
    //   <p>
    //     user works!
    //   </p>
    // `,
    templateUrl: "user.component.html",
    styles: []
})
export class UserComponent implements OnInit {
    param = { value: 'simple wording' };
    constructor(public translate: TranslateService) {
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            console.log('Language changed to ' + this.translate.currentLang);
        });
    }
    log(object: any) {
        console.log(object);
    }
    ngOnInit() {
    }

}
