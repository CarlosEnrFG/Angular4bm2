import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-operaciones',
  styleUrl: './operaciones.css',
  templateUrl: './operaciones.html',
})
export class Operaciones {
  titulo: string = 'Operaciones Básicas';
  numeroUno: number = 0;
  numeroDos: number = 0;
  resultado: number = 0;

  sumar(): void{
    this.resultado = this.numeroUno + this.numeroDos;
  }

  restar(): void{
    this.resultado = this.numeroUno - this.numeroDos;
  }

  multiplicar(): void{
    this.resultado = this.numeroUno * this.numeroDos;
  }

  dividir(): void{
    this.resultado = this.numeroUno / this.numeroDos;
  }
}
