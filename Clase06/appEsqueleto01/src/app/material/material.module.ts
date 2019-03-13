import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout"
import { MatSidenavModule, MatButtonModule, MatIconModule, MatToolbarModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatTableModule, MatPaginatorModule, MatMenuModule, MatCheckboxModule, MatRadioModule } from "@angular/material"

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  exports: [
    FlexLayoutModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
