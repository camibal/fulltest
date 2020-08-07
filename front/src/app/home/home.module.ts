import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
     DashboardComponent,
     NavbarComponent,
     SidebarComponent,
     FooterComponent,
    ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }