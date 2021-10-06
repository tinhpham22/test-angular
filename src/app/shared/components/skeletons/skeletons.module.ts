import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonsComponent } from './skeletons.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    SkeletonsComponent
  ],
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule
  ],
  exports: [SkeletonsComponent]
})
export class SkeletonsModule { }
