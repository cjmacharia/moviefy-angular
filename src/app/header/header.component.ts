import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { BrowseComponent } from '../movies/browse/browse.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	constructor() {
	}

	ngOnInit() {
	}
}
