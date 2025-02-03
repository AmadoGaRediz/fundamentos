import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'primerproyecto';
  //propiedades
  nombre = 'Amado';
  aniosServivio = 2;
  email = 'mado@gmail.com';
  activo = false;
  alumnos = [25,23,52];
  numero = 2;
  contador = 0;
  desactivarBoton = true;

  productos = [
    {
      id:1,
      descripcion: 'Sabritas',
      precio: '25.50'
    },
    {
      id:2,
      descripcion: 'Galletas',
      precio: '23'
    },
    {
      id:3,
      descripcion: 'Refresco',
      precio: '32.50'
    }
  ];

  //funcion que muestra si esta activo o no
  esActivo(){
    if(this.activo){
      return 'Empleado Activo';
    }else{
      return 'Empleado inactivo';
    }
  }

  //funcion que sume los elementos del arreglo de alumnos
  sumarAlumnos(){
    let suma = 0;
    for(let i=0; i<this.alumnos.length;i++){
      suma += this.alumnos[i];
    }
    return suma;
  }


//funcion que genere un numero aleatorio de 1-3

  generarNumero(){
    return Math.floor(Math.random() * 3) + 1;
  }



  //funcion que incrementa el contador
  incrementarContador(){
    this.contador++;
  }

  //funcion que decrementa el contador
  decrementarContador(){
    this.contador--;
  }

  //funcion que cambia el valor de desactivarBoton
  cambiarValor(){
    this.desactivarBoton = false;
  }
}
