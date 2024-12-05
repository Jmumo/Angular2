import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInput } from './userInput.domain';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor(private investmentService : InvestmentService){}

  // @Output() calculate = new EventEmitter<UserInput>();


// calculate = output<UserInput>();

  IntialInvestment = signal('')
  ExpectedReturn = signal('')
  Duration = signal('')
  AnnualInvestment = signal('')

   
  

  onSubmit(){
    const UserData : UserInput = {
      initialInvestment: +this.IntialInvestment() ,
      duration: +this.Duration(),
      expectedReturn: +this.ExpectedReturn(),
      annualInvestment: +this.AnnualInvestment()
    }
    
    this.investmentService.OncalculateInvestmentResults(UserData)


    // this.calculate.emit(UserData)



    this.IntialInvestment.set('0')
    this.AnnualInvestment.set('0')
    this.Duration.set('0')
    this.ExpectedReturn.set('0')
  }

}
