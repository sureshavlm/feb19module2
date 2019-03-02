import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { DevComponent } from './dev.components';

import { DeveloperDetailsComponent } from './developer.details.component';

@NgModule({
	declarations: [ DevComponent, DeveloperDetailsComponent ],
	imports: [ BrowserModule, FormsModule ],
	providers: [],
	bootstrap: [ DevComponent ]
})

export class DevModule {
	
}