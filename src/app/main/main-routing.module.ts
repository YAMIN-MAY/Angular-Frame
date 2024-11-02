import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  }, 
  {
    path: 'auth', component: AuthLayoutComponent,
    children: [
        { path: '', redirectTo: 'login', pathMatch: 'prefix' },
        { path: 'login', component: LoginComponent},
    ]
  }, 
  {
    path: 'home', component: HomeLayoutComponent,
    children: [
        { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
        { path: 'welcome', component: WelcomeComponent}    

        //add here to lazy load specific module.
        // {
        //   path: 'path',
        //   loadChildren: '@app/modules/module-name' 
        // }
    ]
  }
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
