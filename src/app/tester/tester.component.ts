import { Component, OnInit } from '@angular/core';
import { SocketioService } from '../socketio.service';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss']
})
export class TesterComponent implements OnInit {

  messages: any[] = [];
  constructor(private socketService: SocketioService) { }

  ngOnInit() {
    this.messages = this.socketService.message;
  }

  ngOnDestroy() {
  }
}
