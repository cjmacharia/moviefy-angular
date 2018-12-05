import { NgModule } from "@angular/core";
import { MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { BarRatingModule } from 'ngx-bar-rating';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
	imports: [MatButtonModule, MatDialogModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatProgressSpinnerModule, MatMenuModule, MatInputModule, MatCardModule, MatGridListModule, BarRatingModule],
	exports: [MatButtonModule, MatDialogModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatProgressSpinnerModule, MatInputModule, MatCardModule, MatGridListModule, BarRatingModule]

})
export class myCustomMaterial { }