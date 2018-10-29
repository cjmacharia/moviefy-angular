import { NgModule } from "@angular/core";
import { MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
	imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatProgressSpinnerModule, MatMenuModule, MatInputModule, MatCardModule, MatGridListModule],
	exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatProgressSpinnerModule, MatInputModule, MatCardModule, MatGridListModule]

})
export class myCustomMaterial { }