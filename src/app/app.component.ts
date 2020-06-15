import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
//import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';
import defaultLanguage from "./../assets/i18n/en-US.json";
export function STI(str: string) {
  return str;
}
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    messageBoxContent = STI('demo.title');
    constructor(public translate: TranslateService) {
        //translate.setDefaultLang('en');
    translate.setTranslation('en-US', defaultLanguage);
    translate.addLangs(['en-US', 'de-DE', 'zh-CN']);
    translate.setDefaultLang('en-US');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/de|de-DE/) ? 'de-DE' : 'en-US');
    }
    useLanguage(language: string) {
      this.translate.use(language);
  }
}
