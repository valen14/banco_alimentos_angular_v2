import { Component } from '@angular/core';
import { LoggerService, LoopBackConfig } from './service/lbservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'Banco Alimentos';
  constructor(private log: LoggerService) {
    LoopBackConfig.setDebugMode(false); // defaults true
    this.log.info('Component is Loaded');
    LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
    LoopBackConfig.setApiVersion('api');
  }
}
