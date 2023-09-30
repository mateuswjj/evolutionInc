import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AnimalsComponent } from './components/animals/animals.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'main', component: MainComponent},
  {path:'animals', component: AnimalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
