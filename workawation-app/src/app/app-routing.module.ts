import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
   { path: 'home', component: AppComponent },
   {
      path: 'auth',
      loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
