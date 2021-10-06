import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnumAppRouter } from './core/router-name';

const routes: Routes = [
  {
    path: '', redirectTo: EnumAppRouter.Blogs, pathMatch: 'full'
  },
  {
    path: EnumAppRouter.Blogs,
    loadChildren: () =>
      import('./modules/blogs/blogs.module').then(
        (mod) => mod.BlogsModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./shared/components/not-found/not-found.module').then(
        (mod) => mod.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
