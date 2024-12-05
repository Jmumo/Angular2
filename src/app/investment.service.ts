import { Injectable, signal, Signal } from "@angular/core";
import { UserInput } from "./user-input/userInput.domain";
import { resultData } from "./app.domain";


@Injectable({providedIn: 'root'})
export class InvestmentService {

  resultData = signal< resultData [] | undefined>(undefined)


    OncalculateInvestmentResults(
        data : UserInput
      ) { 
      
        const {initialInvestment, duration ,expectedReturn ,annualInvestment} = data
    
       
        const annualData = [];
        let investmentValue = initialInvestment;
      
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
    
        this.resultData.set(annualData)
       

        // this.resultData = annualData        
      }

}