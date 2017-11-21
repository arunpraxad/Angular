import { Component, OnInit } from '@angular/core';
import { CreditCardService } from './credit-card.service';

@Component({
    selector: 'credit-card',
    template: `<h1>{{cardName}} - Number : {{cardNumber}}</h1>`
})

export class CreditCardComponent implements OnInit{
    cardName = 'Visa Card';
    cardNumber: any;

    constructor(
        private creditCardService: CreditCardService
    ) {

    }

    ngOnInit() {
        this.cardNumber = this.creditCardService.getCreditCardNumber();
    }
}