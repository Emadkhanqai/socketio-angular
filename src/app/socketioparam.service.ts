import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { Store } from './store';

export const environment = {
  production: false,
  SOCKET_ENDPOINT: 'http://localhost:3000'
};

@Injectable({
  providedIn: 'root'
})
export class SocketioParamService {

  socket: any;
  employees$: Observable<[]> | undefined;

  constructor(private store: Store) {
  }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT, {
      auth: {
        token: 'xsjkhrlajkljwopeiuq'
      }
    });
  }

  displaySocketData() {
    this.socket.on('document', (data: any) => {
      this.store.set('todos', [data])
    });
  }

  requestSocketData(param: any) {
    this.socket.emit('getDoc', param);
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
