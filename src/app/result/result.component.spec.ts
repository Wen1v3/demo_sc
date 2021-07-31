import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { of } from 'rxjs';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    let testMembers: Member[] = [];

    // Create a fake MemberService object with a `getMembers()` spy
    const memberService = jasmine.createSpyObj('MemberService', ['getMembers']);
    // Make the spy return a synchronous Observable with the test data
    let getMembersSpy = memberService.getMembers.and.returnValue(of(testMembers));

    await TestBed.configureTestingModule({
      declarations: [ ResultComponent ],
      providers: [{provide: MemberService, useValue: memberService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});