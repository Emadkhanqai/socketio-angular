import { Component } from '@angular/core';
import { SocketioParamService } from './socketioparam.service';
import { Store } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos$ = this.store.select<any[]>('todos');
  selectedValue: any;
  users = ['1', '2', '3'];

  constructor(private socketService: SocketioParamService, private store: Store) {
    this.socketService.setupSocketConnection();
  }

  ngOnInit() {
    this.socketService.displaySocketData();
  }

  sendMessage() {
    this.socketService.requestSocketData(2);
  }

  fetchValues() {
    this.socketService.requestSocketData(this.selectedValue);
  }

  ngOnDestroy() {
    this.socketService.disconnect();
  }
}
