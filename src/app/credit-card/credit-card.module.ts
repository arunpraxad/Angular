import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardComponent } from '../credit-card/credit-card.component';
import { CreditCardService } from '../credit-card/credit-card.service';
import { CreditCardMaskPipe } from '../credit-card/credit-card.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        CreditCardService
    ],
    declarations: [
        CreditCardComponent
    ],
    exports: [
        CreditCardComponent
    ]
})

export class CreditCardModule { }
