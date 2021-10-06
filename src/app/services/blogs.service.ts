import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { withEndpoint } from '../core/api-endpoint';
import { ResBlogModel } from '../models/blogs-models/res-blog.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ReqBlogParam } from '../models/blogs-models/req-blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private baseUrl: (url?: string) => string;

  constructor(
    private httpClient: HttpClient,) {
    this.baseUrl = withEndpoint('/blogs');
  }

  getBlogs(param: ReqBlogParam): Observable<HttpResponse<ResBlogModel[]>> {
    let params = new HttpParams();
    params = params.append('p', param.page.toString());
    params = params.append('l', param.limit.toString());
    params = params.append('sortBy', param.sortBy.toString());
    params = params.append('order', param.order.toString());
    if (param.searchKey) {
      params = params.append((param.searchType ?? ''), (param.searchKey.toString() ?? ''));
    }

    return this.httpClient
      .get<ResBlogModel[]>
      (this.baseUrl(''),
        {
          params: params,
          observe: 'response'
        })
      .pipe(
        map((res: HttpResponse<ResBlogModel[]>) => {
          return res;
        }),
        catchError(this.handleError)
      );
  }

  getBlogById(id: ResBlogModel['id']): Observable<HttpResponse<ResBlogModel>> {
    return this.httpClient.get<ResBlogModel>(
      this.baseUrl(`/${id}`), { observe: 'response' }
    ).pipe(
      map((res: HttpResponse<ResBlogModel>) => {
        return res;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.status)
  }
}
