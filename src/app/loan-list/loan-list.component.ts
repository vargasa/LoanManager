import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {

  loanArray = [{ name: 'xyz', outstanding: 10000, pending:'163'},
               { name: 'abc', outstanding: 8000, pending:'60'},
               { name: 'klm', outstanding: 5000, pending:'8'},];

  totalOutstanding = 0;

  constructor() {
    for(var i = 0; i < this.loanArray.length; ++i) {
      this.totalOutstanding += this.loanArray[i].outstanding;
    }

  }

  ngOnInit(): void {
  }

}
