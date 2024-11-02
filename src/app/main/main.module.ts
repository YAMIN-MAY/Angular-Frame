import { NgModule } from '@angular/core';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    HomeLayoutComponent,
    WelcomeComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
})
export class MainModule { }
