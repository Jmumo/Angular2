import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, Input, input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {

  private investmentService = inject(InvestmentService)

  // get results (){
  //   return this.investmentService.resultData
  // }


  // results = computed(() =>this.investmentService.resultData())

  results = this.investmentService.resultData.asReadonly()



  // results = input<>()

  // @Input() results ? : {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number ,
  // }[];
}

