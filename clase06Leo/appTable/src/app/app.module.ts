import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule, MatButtonModule, MatDialogModule, MatToolbarModule, MatSnackBarModule } from "@angular/material";
import { ConfirmacionComponent } from './confirmacion/confirmacion.component'
import { FlexLayoutModule} from '@angular/flex-layout';
import { NotificadorComponent } from './notificador/notificador.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmacionComponent,
    NotificadorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmacionComponent, NotificadorComponent]
})
export class AppModule { }
