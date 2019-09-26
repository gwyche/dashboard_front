import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FormaComponent } from './forma/forma.component';


const routes: Routes = [
  {path: 'index', component: MainComponent},
  {path: '', component: MainComponent},
  {path: 'a', component: FormaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
