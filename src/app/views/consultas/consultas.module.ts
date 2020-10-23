import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{ConsultasComponent} from './consultas.component';
import { ConsultasRoutingModule } from './consultas-routing.module';


@NgModule({
  declarations: [
    ConsultasComponent

  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    FormsModule
  ]
})
export class ConsultasModule { }
