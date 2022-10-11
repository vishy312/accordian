import { Component } from '@angular/core';
import {QUESTIONS} from './QUESTIONS';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){

  }

  questions = QUESTIONS;
}
