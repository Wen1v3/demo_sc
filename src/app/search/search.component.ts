import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  //date: Date = new Date('May 12, 2016 00:00:00');
  date: Date = new Date();
  myTitle = "Member Search";
  model = { date: this.date, policyNumber: 0, memberCardNumber: '' };

  constructor(private router: Router, private stateService: StateService) { }

  ngOnInit(): void {
    this.loadState();
  }

  loadState() {
    this.model.date = this.stateService.getStateDate('date')!;
    this.model.memberCardNumber = this.stateService.getStateString('memberCardNumber')!;
    this.model.policyNumber = this.stateService.getStateNumber('policyNumber')!;
  }

  setState(key: string) {
    switch(key){
      case 'date':
        this.stateService.setStateDate(key, this.model.date);
        break;
      case 'policyNumber':
        this.stateService.setStateNumber(key, this.model.policyNumber);
        break;
      case 'memberCardNumber':
        this.stateService.setStateString(key, this.model.memberCardNumber);
        break;

      default:
        console.log("[Error] Not valid key.");
    }
  }

  onSubmit() { this.router.navigateByUrl('/result'); }
}