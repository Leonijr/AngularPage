import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Leoni";
  public idade: number = 28;

  public checkedDisable: boolean = false;
  public imgSrc: string = "https://i.pinimg.com/564x/64/91/3d/64913dd80f965ab83fb21cc170623ffe.jpg";
  public imgTitle: string = "Property Binding";
  public imgAlt: string = "Property Binding";


  public position: {x: number , y: number} = {x:0 , y:0};
  constructor() { }

  ngOnInit(): void {
  }

  public alertaInfo(valor: MouseEvent){
    console.log(valor);
  }

  public mouseMoveTest(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
