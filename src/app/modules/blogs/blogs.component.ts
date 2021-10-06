import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../services/blogs.service';
import { ResBlogModel } from '../../models/blogs-models/res-blog.model';
import { timeFromNowToString } from 'src/app/shared/utils/time';
import { ToastrService } from 'ngx-toastr';
import { KeyStatusCode, StatusCode } from '../../core/statusCode';
import { CodeSort } from 'src/app/models/shared.model';
import { InitialReqBlogParam, ReqBlogParam } from '../../models/blogs-models/req-blog.model';
import { Pagination } from 'src/app/shared/models/pagination.model';

interface Order {
  code: CodeSort,
  name: string,
}

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})

export class BlogsComponent implements OnInit {
  blogs: ResBlogModel[] = [];
  limit = 10;
  page = 1;
  isLoading = false;
  selectedOrder: Order['code'] = 'asc';
  initialReqBlogParam = InitialReqBlogParam;
  orders: Order[] = [
    { code: 'asc', name: 'Old' },
    { code: 'desc', name: 'New' },
  ];

  constructor(
    private blogsService: BlogsService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.loadBlogs(this.initialReqBlogParam)
  }

  handlerOrder() {
    this.loadBlogs({ page: this.initialReqBlogParam.page, limit: this.initialReqBlogParam.limit });
  }

  loadBlogs(value: Pagination) {
    const _req: ReqBlogParam = {
      limit: value.limit,
      page: value.page,
      order: this.selectedOrder || 'asc',
      sortBy: 'createdAt',
    }
    this.isLoading = true
    this.blogsService.getBlogs(_req).subscribe(
      (res) => { this.blogs = res.body || []; this.toastr.success(StatusCode[res.status + '' as KeyStatusCode], res.status + '') },
      (err) => { this.toastr.error(StatusCode[err as KeyStatusCode], err) },
      () => { this.isLoading = false; }
    )
  }

  getTimeFromNow(time: string) {
    return timeFromNowToString(time)
  }

}
