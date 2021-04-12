import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-summary',
  templateUrl: './loan-summary.component.html',
  styleUrls: ['./loan-summary.component.css']
})
export class LoanSummaryComponent implements OnInit {

  constructor() { }

  outstandingDebt = 23000;
  interestPaid = 2000;
  principalPaid = 8500;

  ngOnInit(): void {
  }

}
