import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BasicLayoutComponent } from './layouts/basic-layout/basic-layout.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    BasicLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    BasicLayoutComponent
  ],
})
export class ThemeModule { }
