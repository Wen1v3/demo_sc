import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StateService {
    stateStringMap = new Map([
        ["memberCardNumber", ""]
    ]);   
    stateNumberMap = new Map([
        ["policyNumber", 12345678]
    ]); 
    stateDateMap = new Map([
        ["date", new Date('May 12, 2016 00:00:00')]
    ]); 
    
    getStateNumber(key: string) {
        return this.stateNumberMap.get(key);
    }
    setStateNumber(key: string, value: number) {
        this.stateNumberMap.set(key, value);
    }
    getStateString(key: string) {
        return this.stateStringMap.get(key);
    }
    setStateString(key: string, value: string) {
        this.stateStringMap.set(key, value);
    }
    getStateDate(key: string) {
        return this.stateDateMap.get(key);
    }
    setStateDate(key: string, value: Date) {
        this.stateDateMap.set(key, value);
    }
}