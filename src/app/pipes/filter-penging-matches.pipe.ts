import { Pipe, PipeTransform } from '@angular/core';
import { Match } from '../components/models/match.model';

@Pipe({
  name: 'filterPengingMatches'
})
export class FilterPengingMatchesPipe implements PipeTransform {

  transform(value: Match): any {
    let today = new Date()
    let todaysDate = today.getDate()
    let tomorrow = new Date() 
    tomorrow.setDate(today.getDate() + 1)
    if (value.utcDate.getDate() == todaysDate || tomorrow)
      return value
  }

}
