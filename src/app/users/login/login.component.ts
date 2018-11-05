import { Component, OnInit } from '@angular/core';
import { MoviefyService } from '../../moviefy.service';
import { error } from 'util';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
declare var jQuery: any;
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	email: string;
	password: string;
	errors: any
	returnUrl: any;
	constructor(private service: MoviefyService, private route: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService) { }

	ngOnInit() {

	}
	login() {
		this.spinner.show();
		this.service.loginUser({ email: this.email, password: this.password }).subscribe((data: any) => {
			this.spinner.hide();
			jQuery("#loginModal").modal("hide");
			localStorage.setItem('token', data.token)
		},
			error => {
				this.spinner.hide();
				this.errors = error;
				console.log(this.errors, '????????')
			})
	}
}
