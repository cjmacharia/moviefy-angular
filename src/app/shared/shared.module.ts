import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { myCustomMaterial } from "../material";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
	imports: [
		FormsModule,
		ReactiveFormsModule,
		myCustomMaterial,
		BrowserModule,
		NgxSpinnerModule,
		CommonModule
	],
	exports: [
		FormsModule,
		BrowserModule,
		ReactiveFormsModule,
		myCustomMaterial,
		CommonModule,
		NgxSpinnerModule
	]
})

export class SharedModule { }