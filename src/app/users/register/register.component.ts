import { Component, OnInit } from '@angular/core';
import { MoviefyService } from '../../moviefy.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { error } from 'protractor';
declare var jQuery: any;
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	name: string;
	email: string;
	errors: any;
	success: string;
	password: string;
	constructor(private service: MoviefyService, private router: Router, private spinner: NgxSpinnerService) { }

	ngOnInit() {
	}
	register() {
		this.spinner.show();
		this.service.registerUser({ email: this.email, name: this.name, password: this.password }).subscribe(data => {
			this.spinner.hide();
			this.success = "successfully registered you can now log in"
			jQuery(document).ready(function () {
				setTimeout(function () {
					jQuery('#registerModal').modal('hide');
				}, 3000); // milliseconds
			})
		}, error => {
			this.spinner.hide();
			this.errors = error
		})
	}
}
