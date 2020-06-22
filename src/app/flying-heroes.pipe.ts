import { Pipe, PipeTransform } from '@angular/core';
import { Flyer} from './heroes.model'

@Pipe({
  name: 'flyingHeroes'
})
export class FlyingHeroesPipe implements PipeTransform {

  transform(allHeroes: Flyer[]): any {
    return allHeroes.filter(x=>x.canFly);
  }

}
