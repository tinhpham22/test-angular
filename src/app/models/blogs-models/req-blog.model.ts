import { CodeSort } from '../shared.model';
import { ResBlogModel } from './res-blog.model';

export type SearchType = 'search' | 'filter' | 'title'
export interface ReqBlogParam {
    page: number;
    limit: number;
    sortBy: keyof ResBlogModel;
    order: CodeSort;
    searchType?: SearchType;
    searchKey?: string;
}

export const InitialReqBlogParam: ReqBlogParam = {
    page: 1,
    limit: 10,
    sortBy: 'createdAt',
    order: 'asc',
    searchType: 'search',
    searchKey: '',
}