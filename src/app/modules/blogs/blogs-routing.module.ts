import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { BlogsDetailsComponent } from './blogs-details/blogs-details.component';
import { SearchComponent } from './shared/components/search/search.component';
import { EnumAppRouter } from 'src/app/core/router-name';

const routes: Routes = [
  {
    path: '', component: BlogsComponent, pathMatch: 'full'
  },
  {
    path: 'blog/:id', component: BlogsDetailsComponent
  },
  {
    path: EnumAppRouter.Search, component: SearchComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BlogsRoutingModule { }
