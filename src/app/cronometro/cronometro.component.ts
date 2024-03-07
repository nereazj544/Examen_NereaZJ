import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit{
  valor: number= 0; //!Valor inicial cero
  

  ngOnInit(): void {
    
  }

  async play(){
    
  }
  pausar(){
    
  }

  record(){

  }
}
