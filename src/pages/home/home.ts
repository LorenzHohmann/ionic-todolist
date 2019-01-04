import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Todo } from '../../models/todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	todos = [];


  constructor(public navCtrl: NavController) {
  	this.todos.push(new Todo({title: 'Punkt 1'}));
  	this.todos.push(new Todo({title: 'Punkt 2'}));
  	this.todos.push(new Todo({title: 'Punkt 3', done: true}));
  	this.todos.push(new Todo({title: 'Punkt 4', done: true, disabled: true}));
  }

}
