import { Component, OnInit } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { Route } from '@angular/router';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
// public saludoinicial: string = "Hola, como estas?";
public saludo:string = "" ;

ngOnInit() {
  if (this.saludo) {
    this.saludo = "Hola, como estas?";
  
  } else{
    this.saludo = "Hola, como estas?. Bienvenido de nuevo";
  }
} 
}
