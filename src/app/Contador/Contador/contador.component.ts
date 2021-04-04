import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{ titulo }}</h1>
    <h1>La base es <strong>{{base}}</strong></h1>

    <!-- <button (click)=" numero=numero + 1; ">+1</button> -->
    <!-- <button (click)=" numero=numero - 1; ">-1</button> -->

    <!-- <button (click)="Sumar();">+1</button> -->
    <!-- <button (click)="Restar();">-1</button> -->

    <button (click)="Acumulador(base)">+{{base}}</button>
    <span>{{numero}}</span>

    <button (click)="Acumulador(-base)">-{{base}}</button>

    `
})

export
class ContadorComponente
{

    public titulo: string = 'Contador App';
    public numero: number=10;
    public base:number=5;

    Sumar(){
        this.numero+=1;
    }

    Restar(){
        this.numero-=1;
    }

    Acumulador ( valor: number)
    {
        this.numero+=valor;
    }

}