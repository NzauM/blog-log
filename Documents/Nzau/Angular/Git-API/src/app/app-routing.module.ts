import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitComponent } from './git/git.component'
import { from } from 'rxjs';
import { NotFoundComponent } from './not-found/not-found.component'



const routes: Routes = [
  {"path":"user","component":GitComponent},
  {path:"repos",component:GitComponent},
  {"pathMatch":"full","redirectTo":"home","path":""},
  {"path":"**","component":NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
