import {  Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title *ngIf="destruir"></app-title>
  <br>
  <br>
  <button (click)="deleteComponent()">Destruir Componente</button>
  <router-outlet></router-outlet>`,

})
export class AppComponent implements OnInit{

  public destruir: boolean =true;
  constructor(){}

  ngOnInit(): void {
  }

  public deleteComponent(){
    this.destruir = false;
  }


}
