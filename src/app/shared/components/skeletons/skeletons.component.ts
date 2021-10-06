import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeletons',
  templateUrl: './skeletons.component.html',
  styleUrls: ['./skeletons.component.scss']
})
export class SkeletonsComponent {
  @Input() count = 1;
}
