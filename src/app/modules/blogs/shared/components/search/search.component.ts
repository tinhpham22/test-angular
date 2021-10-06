import { Component, OnInit } from '@angular/core';
import { InitialReqBlogParam, ReqBlogParam, SearchType } from 'src/app/models/blogs-models/req-blog.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { BlogsService } from '../../../../../services/blogs.service';
import { ResBlogModel } from '../../../../../models/blogs-models/res-blog.model';
import { ToastrService } from 'ngx-toastr';
import { KeyStatusCode, StatusCode } from 'src/app/core/statusCode';
import { ActivatedRoute, Router } from '@angular/router';
import { EnumAppRouter } from 'src/app/core/router-name';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  initialReqBlogParam = InitialReqBlogParam;
  searchType: SearchType = 'search';
  isLoading = false;
  searchKey = '';
  blogs: ResBlogModel[] = [];

  constructor(
    private blogsService: BlogsService,
    private toastrService: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.searchDefault();
  }

  searchDefault() {
    this.route.queryParams.subscribe(params => {
      for (const [type, value] of Object.entries(params)) {
        this.searchKey = value;
        this.searchType = type as SearchType;
        this.handlerSearch({ page: this.initialReqBlogParam.page, limit: this.initialReqBlogParam.limit })
      }
    });
  }

  handerChangeSearchType(type: SearchType) {
    this.searchType = type;
    this.router.navigate([EnumAppRouter.Blogs, EnumAppRouter.Search], { queryParams: { [this.searchType]: this.searchKey } });
  }

  handlerSearch(value: Pagination) {
    this.isLoading = true;
    const _req: ReqBlogParam = {
      ...this.initialReqBlogParam,
      page: value.page,
      limit: value.limit,
      searchKey: this.searchKey,
      searchType: this.searchType,
    }
    this.blogsService.getBlogs(_req).subscribe(
      (res) => {
        this.blogs = res.body || [];
        this.toastrService.success(StatusCode[res.status + '' as KeyStatusCode], res.status + '')
      },
      (err) => { this.toastrService.success(StatusCode[err + '' as KeyStatusCode], err + '') },
      () => { this.isLoading = false },
    )
  }
}
