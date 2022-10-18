import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesterComponent } from './tester/tester.component';
import { DumbComponent } from './dumb/dumb.component';
import { SocketioParamService } from './socketioparam.service';
import { FormsModule } from '@angular/forms';
import { Store } from './store';

@NgModule({
  declarations: [
    AppComponent,
    TesterComponent,
    DumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [SocketioParamService, Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
