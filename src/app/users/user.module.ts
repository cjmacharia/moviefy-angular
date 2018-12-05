import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SharedModule } from "../shared/shared.module";
import { UsersComponent } from "./users.component";

@NgModule({
	declarations: [
		LoginComponent,
		RegisterComponent,
		UsersComponent
	],
	imports: [
		SharedModule,
	],
	exports: [
		LoginComponent,
		RegisterComponent,
		UsersComponent
	]
})

export class UserModule { }