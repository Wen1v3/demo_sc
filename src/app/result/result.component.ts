import { Component, OnInit } from '@angular/core';

import { Member } from '../member';
import { StateService } from '../state.service';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  myTitle = "Search Results";
  members: Member[] = [];
  memberCardNumber = "";
  policyNumber = 0;

  constructor(private stateService: StateService, private memberService: MemberService) { }

  ngOnInit(): void {
    this.getSearchTerm();
    this.getMembers();
  }

  getSearchTerm(): void {
    this.memberCardNumber = this.stateService.getStateString('memberCardNumber')!;
    this.policyNumber = this.stateService.getStateNumber('policyNumber')!;
  }

  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => {
        if (this.memberCardNumber) {
          this.members = members.filter(h => h.policyNumber == this.policyNumber && h.memberCardNumber == this.memberCardNumber);
        } else {
          this.members = members.filter(h => h.policyNumber == this.policyNumber);
        }
      });
  }
}
