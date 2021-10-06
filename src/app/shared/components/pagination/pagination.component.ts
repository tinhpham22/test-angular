import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pagination } from '../../models/pagination.model';

type Flag = 'previous' | 'next' | '';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent {
  tempPagesTotal: number[] = [];
  pageOld = 1;
  limit = 10;
  @Input() set pagesTotal(val: number) {
    const maxPages = Math.ceil(val / this.limit);
    if (val) {
      this.tempPagesTotal = Array.from(new Array(maxPages).keys()).map(k => k);
      ;
    } else {
      this.tempPagesTotal = Array.from(new Array(maxPages).keys()).map(k => k);
    }
  };

  get pagesTotal(): any {
    return this.tempPagesTotal;
  }

  @Output() changePage = new EventEmitter<Pagination>();

  nextPage(flag: Flag, num: number) {
    let _page = 0;
    if (flag === 'previous') {
      _page = this.pageOld - 1;
    } else if (flag === 'next') {
      _page = this.pageOld + 1
    } else {
      _page = num;
    }
    this.pageOld = _page;
    this.changePage.emit({ page: _page, limit: this.limit })
  }

}
