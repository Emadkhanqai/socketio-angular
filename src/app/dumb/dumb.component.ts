import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.scss']
})
export class DumbComponent {

  @Input() todos: any;

  constructor() { }

}
