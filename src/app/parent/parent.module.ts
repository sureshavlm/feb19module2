import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ParentComponent } from './parent.component';
import { ChildComponent } from '../child/child.component';

@NgModule({
	declarations: [ ParentComponent, ChildComponent ],
	imports: [ BrowserModule ],
	providers: [],
	bootstrap: [ ParentComponent ]
})


export class ParentModule {
	
}