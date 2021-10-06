import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { BlogsDetailsComponent } from './blogs-details/blogs-details.component';
import { BlogsRoutingModule } from './blogs-routing.module';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';
import { PaginationModule } from 'src/app/shared/components/pagination/pagination.module';
import { SkeletonsModule } from 'src/app/shared/components/skeletons/skeletons.module';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './shared/components/search/search.component';
import { CardBlogComponent } from './shared/components/card-blog/card-blog.component';
import { EmptyModule } from 'src/app/shared/components/empty/empty.module';

@NgModule({
  declarations: [
    BlogsComponent,
    BlogsDetailsComponent,
    SearchComponent,
    CardBlogComponent,
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    LazyLoadImageModule,
    PaginationModule,
    SkeletonsModule,
    FormsModule,
    EmptyModule
  ],

  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
})
export class BlogsModule { }
