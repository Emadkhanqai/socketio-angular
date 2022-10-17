import { Component } from '@angular/core';
import { SocketioService } from './socketio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  messages: any[] = [];
  interval: any;

  constructor(private socketService: SocketioService) {
    console.log('connected');
    this.socketService.setupSocketConnection();
  }

  ngOnInit() {
    this.socketService.receiveMessage();
    this.messages = this.socketService.message;
  }

  sendMessage() {
    this.socketService.sendMessage('Main App');
  }

  connect() {
    this.socketService.setupSocketConnection();
  }

  disconnect() {
    this.socketService.disconnect();
  }


  ngOnDestroy() {
    this.socketService.disconnect();
  }
}
