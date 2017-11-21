import {  Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'creditCardMask'
})

export class CreditCardMaskPipe implements PipeTransform {
    transform(plainCreditNumber): String {

        const visiableDigits = 4;
        let maskedSection = plainCreditNumber.slice(0, -visiableDigits);
        let visiableSection = plainCreditNumber.slice(-visiableDigits);
        return maskedSection.replace(/./g, '*') + visiableSection;
    }
}