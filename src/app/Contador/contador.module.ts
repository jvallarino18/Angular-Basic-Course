import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponente } from './Contador/contador.component';

@NgModule({
    declarations: [
    ContadorComponente,
    ],
    exports:[
        ContadorComponente,
    ],
    imports: [
        CommonModule,

    ]
    
})


export class ContadorModule {


}