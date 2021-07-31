import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { StateService } from '../state.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  let stateServiceStub: Partial<StateService>;
  let stateService: StateService;

  beforeEach(async () => {
    stateServiceStub = {
      stateStringMap : new Map([
        ["memberCardNumber", ""]
      ]),
      stateNumberMap : new Map([
        ["policyNumber", 12345678]
      ]),
      stateDateMap : new Map([
        ["date", new Date('May 12, 2016 00:00:00')]
      ])
    };
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ SearchComponent ],
      providers: [ { provide: Router, useValue: routerSpy }, { provide: StateService, useClass: StateService } ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    // inject service here
    stateService = TestBed.inject(StateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind state', () => {
    fixture.detectChanges();
    let el = fixture.nativeElement.querySelector('#date');
    let content = el.getAttribute('ng-reflect-model');
    expect(content).toContain('May 12 2016');

    el = fixture.nativeElement.querySelector('#policyNumber');
    content = el.getAttribute('ng-reflect-model');
    expect(content).toBe('12345678');

    el = fixture.nativeElement.querySelector('#memberCardNumber');
    content = el.getAttribute('ng-reflect-model');
    expect(content).toBe('');
  });
});