import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'developer-details',
	templateUrl: './developer.details.component.html'
})

export class DeveloperDetailsComponent {
	@Input() currentSelectedItem: any;
	
	@Output() updateDeveloper : EventEmitter = new EventEmitter();

	updateSkill() {
		this.updateDeveloper.emit(this.currentSelectedItem);
	}
}