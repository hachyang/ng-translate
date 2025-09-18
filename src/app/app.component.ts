import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
//import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';
//import defaultLanguage from "./../assets/i18n/i18n-EN.json";
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
    //translate.setTranslation('i18n-EN', defaultLanguage);
    translate.addLangs(['i18n-EN', 'i18n-DE', 'i18n-ZH']);
    translate.setDefaultLang('i18n-EN');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/de|de-DE/) ? 'i18n-DE' : 'i18n-EN');
    }
    useLanguage(language: string) {
      this.translate.use(language);
  }
}
