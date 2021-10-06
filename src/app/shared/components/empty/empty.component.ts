import { Component } from '@angular/core';
import { DefaultImg } from 'src/app/core/enum-global';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent {
  defaultImage = DefaultImg.link;
}
