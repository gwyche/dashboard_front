import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Main2Component } from './main2/main2.component';
import { Main3Component } from './main3/main3.component';
import { FormaComponent } from './forma/forma.component';
import { FormbComponent } from '../app/formb/formb.component';
import { FormcComponent } from '../app/formc/formc.component';


const routes: Routes = [
  {path: 'index', component: MainComponent},
  {path: '', component: MainComponent},
  {path: 's', component: Main2Component},
  {path: 'ca', component: Main3Component},
  {path: 'a', component: FormaComponent},
  {path: 'b', component: FormbComponent},
  {path: 'c', component: FormcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
