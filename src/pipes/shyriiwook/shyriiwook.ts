import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

/**
 * Generated class for the ShyriiwookPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'shyriiwook',
  pure: false
})
export class ShyriiwookPipe implements PipeTransform {

  // Ref.: https://github.com/dmke/wookie-translator/blob/master/lib/wookie/dialects/simple.rb
  static wookieMap:any = {
    'a' : 'ra', 'b' : 'rh', 'c' : 'oa', 'd' : 'wa', 'e' : 'wo', 'f' : 'ww',
      'g' : 'rr', 'h' : 'ac', 'i' : 'ah', 'j' : 'sh', 'k' : 'or', 'l' : 'an',
      'm' : 'sc', 'n' : 'wh', 'o' : 'oo', 'p' : 'ak', 'q' : 'rq', 'r' : 'rc',
      's' : 'c',  't' : 'ao', 'u' : 'hu', 'v' : 'ho', 'w' : 'oh', 'x' : 'k',
      'y' : 'ro', 'z' : 'uf'
  };

  private toShyriiwook(text: string): string {
    let translatedText: string = text;
    let translatedTextArr: Array<string> = _.map(text.split(''), (v: string) => {      
      let origChar: string = ShyriiwookPipe.wookieMap[v.toLowerCase()];      
      let tChar: string = (!origChar) ? v : origChar;
      //tChar = (!!origChar && v === v.toUpperCase()) ? _.startCase(tChar) : tChar;
      // Proper names mantain the original character
      tChar = (!!origChar && v === v.toUpperCase()) ? v : tChar;

      return tChar;
    });
    
    translatedText = translatedTextArr.join('');
    translatedText = translatedText.replace(/<rhrc>/g,'<br>');

    return translatedText;
  }
  
  transform(value: string, translate?: boolean | false) {    
    return (!!value && translate) ? this.toShyriiwook(value) : value;
  }
}
