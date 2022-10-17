import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

export const environment = {
  production: false,
  SOCKET_ENDPOINT: 'http://localhost:3000'
};

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket: any;
  message: string[] = [];

  constructor() { }

  // getUnitStatus {
  //     "empCode": "07030010",
  //     "projectId": "620661572b5db71186321491",
  //     "category": "shops",
  //     "blockId": "6331499010e263d55824dc8b"
  // }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }

  receiveMessage() {
    this.socket.on('receiveMessage', (data: string) => {
      this.message.push(data);
    });
  }

  sendMessage(data: any) {
    this.socket.emit('getUnitStatus', data);
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
