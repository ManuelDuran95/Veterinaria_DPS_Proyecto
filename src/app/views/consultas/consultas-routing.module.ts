import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultasComponent } from './consultas.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'consultas'
    },
    children: [
      {
        path: '',
        redirectTo: 'consultas'
      },
      {
        path: 'consultas',
        component: ConsultasComponent,
        data: {
          title: 'Consultas'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
