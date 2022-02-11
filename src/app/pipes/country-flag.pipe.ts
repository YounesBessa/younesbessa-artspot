import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'countryFlag'
})
export class CountryFlagPipe implements PipeTransform {
    cdnUrl = 'https://flagcdn.com/';

    transform(value: string): string{
        return this.cdnUrl + value + '.svg';
    }
}
