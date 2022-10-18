// store.set('todos', [])
// store.select('todos')

import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs"
import { distinctUntilChanged, filter, map, pluck, shareReplay } from "rxjs/operators";

interface State {
  playlist: any[],
  todos: []
}

const state: State = {
  playlist: [],
  todos: []
}

@Injectable({
  providedIn: 'root'
})
export class Store {

  // Subject cannot create an initial state therefore we are using Behavior subject
  // BehaviorSubject pass the last value whenever someone subscribes

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(shareReplay(1));

  // for immutability
  get value() {
    return this.subject.value;
  }

  // store.set('todos', [{},{}])
  set(name: string, state: any) {
    this.subject.next({
      ...this.value,
      [name]: state
    })
  }

  // access the store, it returns observable
  // store.select(<Todo[]>('todos'))
  select<T>(name: string): Observable<T> {
    return this.store.pipe(map((object: any) => {
      return object[name]
    }));
  }

}
