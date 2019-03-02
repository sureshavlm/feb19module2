import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector : 'child-component',
	templateUrl : './child.component.html' 
})

export class ChildComponent {
	
	@Input() counter : any;
	
	@Output() update : EventEmitter = new EventEmitter();

	increment() {

		this.counter = this.counter + 1;

		this.update.emit({ count: this.counter, name: 'suresh' }); //emitting an event
	} 
}