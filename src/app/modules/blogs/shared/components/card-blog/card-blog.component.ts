import { Component, Input } from '@angular/core';
import { DefaultImg } from 'src/app/core/enum-global';
import { timeFromNowToString } from 'src/app/shared/utils/time';
import { ResBlogModel } from '../../../../../models/blogs-models/res-blog.model';

@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.scss']
})
export class CardBlogComponent {
  defaultImage = DefaultImg.link;
  @Input() blog: ResBlogModel = {} as ResBlogModel;

  getTimeFromNow(time: string) {
    return timeFromNowToString(time)
  }

}
