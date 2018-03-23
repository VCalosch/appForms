import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario:Object={
    nombre: null,
    apellido: null,
    correo: null,
    pais: null
  }

  paises = [{
    codigo: "ESA",
    nombre: "El Salvador"
  },
  {
    codigo: "ESP",
    nombre: "España"
  }]

  json:string;

  sexos:string[] = ["Hombre, Mujer"]

  constructor() { }

  ngOnInit() {
  }
  guardar(forma:any){
    this.json = JSON.stringify(this.usuario);
    console.log(forma);
    console.log("Valores", forma.value);
    alert(this.json)
  }
}
