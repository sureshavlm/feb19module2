import { Component } from '@angular/core';

@Component({
	selector : 'parent-component',
	templateUrl : './parent.component.html' 
})

export class ParentComponent {
	
	public count : int = 0;

	increment() {
		this.count = this.count + 1;
	}

	updateInParent(event) {
		this.count = event.count;
		console.log(event.name);
	}

}