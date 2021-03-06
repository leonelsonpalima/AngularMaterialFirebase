import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/Material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      "mi_icono",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/197484.svg")
    )
  }
}
