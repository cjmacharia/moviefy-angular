import { Component, OnInit } from '@angular/core';
import { MoviefyService } from '../../moviefy.service';
import { error } from 'util';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	email: string;
	password: string;
	returnUrl: any;
	constructor(private service: MoviefyService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
	}
	login() {
		this.service.loginUser({ email: this.email, password: this.password }).subscribe(data => {
			this.returnUrl = this.router.navigate(['/'])
			localStorage.setItem('token', data.token)
		},
			error => {
				console.log(error.error.error, '{{{{{{}}}}')
			})
	}
}
