import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-operaciones',
  styleUrl: './operaciones.css',
  templateUrl: './operaciones.html',
})
export class Operaciones {
  titulo: string = 'Operaciones Básicas';
  numeroUno: number = 5;
  numeroDos: number = 10;
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
