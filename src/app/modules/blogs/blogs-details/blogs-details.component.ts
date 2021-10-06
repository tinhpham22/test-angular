import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../../../services/blogs.service';
import { ResBlogModel } from '../../../models/blogs-models/res-blog.model';
import { DefaultImg } from 'src/app/core/enum-global';
import { timeFromNowToString } from 'src/app/shared/utils/time';
import { ToastrService } from 'ngx-toastr';
import { KeyStatusCode, StatusCode } from 'src/app/core/statusCode';

@Component({
  selector: 'app-blogs-details',
  templateUrl: './blogs-details.component.html',
  styleUrls: ['./blogs-details.component.scss']
})
export class BlogsDetailsComponent implements OnInit {
  defaultImage = DefaultImg.link;
  blog: ResBlogModel = {} as ResBlogModel;
  routeParam = '';
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService,
    private toastr: ToastrService,
  ) {
    this.routeParam = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.loadBlogById(this.routeParam)
  }

  loadBlogById(id: ResBlogModel['id']) {
    this.isLoading = true;
    this.blogsService.getBlogById(id).subscribe(
      (res) => { this.blog = res.body || {} as ResBlogModel; this.toastr.success(StatusCode[res.status + '' as KeyStatusCode], res.status + '') },
      (err) => { this.toastr.error(StatusCode[err as KeyStatusCode], err) },
      () => { this.isLoading = false }
    )
  }

  getTimeFromNow(time: string) {
    return timeFromNowToString(time)
  }


}
