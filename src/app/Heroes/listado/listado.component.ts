import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent    {

  heroes: string[]=['Spider','IronMan','Thor','Hulk','Capitan America'];
  heroeborrado?:string="";

  // get pHeroeBorrado(){
  //     return this.heroeborrado;

  // }
  

  borrarHeroe()
  {
    // this.heroes.length= this.heroes.length-1;
     this.heroeborrado=this.heroes.shift() || '';
    
    console.log(this.heroeborrado);
  
  }

}

