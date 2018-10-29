import { Component, OnInit } from '@angular/core';
import { MoviefyService } from '../../moviefy.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	name: string;
	email: string;
	password: string;
	constructor(private service: MoviefyService, private router: Router) { }

	ngOnInit() {
	}
	register() {
		this.service.registerUser({ email: this.email, name: this.name, password: this.password }).subscribe(data => {
			this.router.navigate(['/login'])
		})
	}
}
