import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout"
import {
	MatToolbarModule,
	MatFormFieldModule,
	MatIconModule,
	MatButtonModule,
	MatInputModule,
	MatSidenavModule,
	MatTooltipModule,
	MatListModule,
	MatDividerModule,
	MatMenuModule,
	MatCardModule,
	MatGridListModule,
	MatSelectModule,
	MatTableModule,
	MatDialogModule
} from "@angular/material"
import { LayoutModule } from '@angular/cdk/layout';
import { ConfirmarComponent } from './confirmar/confirmar.component';

@NgModule({
	declarations: [ConfirmarComponent],
	imports: [
		CommonModule,
		FlexLayoutModule,
		LayoutModule,
		MatToolbarModule,
		MatFormFieldModule,
		MatIconModule,
		MatButtonModule,
		MatInputModule,
		MatSidenavModule,
		MatTooltipModule,
		MatListModule,
		MatDividerModule,
		MatMenuModule,
		MatCardModule,
		MatGridListModule,
		MatSelectModule,
		MatTableModule,
		MatDialogModule
	],
	exports: [
		FlexLayoutModule,
		LayoutModule,
		MatToolbarModule,
		MatFormFieldModule,
		MatIconModule,
		MatButtonModule,
		MatInputModule,
		MatSidenavModule,
		MatTooltipModule,
		MatListModule,
		MatDividerModule,
		MatMenuModule,
		MatCardModule,
		MatGridListModule,
		MatSelectModule,
		MatTableModule,
		MatDialogModule
	],
	entryComponents: [ConfirmarComponent]
})
export class CompartidoModule { }
