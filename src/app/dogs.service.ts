import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dog } from './dog';
import DOGS from './dogdata.json';

@Injectable({
  providedIn: 'root'
})
export class DogsService implements OnInit {
  private dogData = DOGS;
  constructor() { }
  all(): Observable<Dog[]> {
    return of (this.dogData);
}
  ngOnInit(): void {}
}
