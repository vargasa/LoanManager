import { Component, OnInit } from '@angular/core';

export interface paymentEntry {
  outstanding: number;
  toCapital: number;
  interest: number;
  date: number;
}

@Component({
  selector: 'app-amortization-schedule',
  templateUrl: './amortization-schedule.component.html',
  styleUrls: ['./amortization-schedule.component.css']
})
export class AmortizationScheduleComponent implements OnInit {

  principal = 29583641.32;
  apy = 0.11;
  term = 34;
  option = 12.; // perYear

  payments : paymentEntry[] = [];

  constructor() {

    let mpy = Math.pow(1.+this.apy,1./this.option)-1.;
    console.log(mpy);
    let installment = this.principal*(((Math.pow(1+mpy,this.term))*mpy)/((Math.pow(1+mpy,this.term)-1)));
    console.log(installment);

    let prevCapital = this.principal;
    for(var i = 0; i < this.term; ++i) {
       let interestAmount = prevCapital * mpy;
       let pE = {} as paymentEntry;
       pE.outstanding = prevCapital;
       pE.interest = interestAmount;
       pE.toCapital = installment - interestAmount;
       pE.date = 0;
       this.payments.push(pE);
       prevCapital = prevCapital - (installment - interestAmount);
    }

  }

  ngOnInit(): void {
  }

}
