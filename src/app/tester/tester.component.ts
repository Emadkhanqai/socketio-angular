import { Component, OnInit } from '@angular/core';
import { Store } from '../store';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss']
})
export class TesterComponent implements OnInit {

  todos$ = this.store.select<any[]>('todos');

  constructor(private store: Store) { }

  ngOnInit() {
    console.log('tester dumb');
  }

  ngOnDestroy() {
  }
}
