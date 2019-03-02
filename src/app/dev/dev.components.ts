import { Component } from '@angular/core';

@Component({
	selector: 'developers-component',
	templateUrl: './dev.component.html'
})

export class DevComponent {

	public developers: any = [ 
								{ name: 'Sundar', skill: 'Java'},
								{ name: 'Rajesh', skill: '.Net' },
								{ name: 'Sita', skill: 'Selenium'}
							];
	public selectedDeveloper: any;



	selectDeveloper(_selectedDeveloper) {
		this.selectedDeveloper = _selectedDeveloper;
	}

	updateInParent(_developer) {
		this.selectedDeveloper = _developer;
	}


	
}