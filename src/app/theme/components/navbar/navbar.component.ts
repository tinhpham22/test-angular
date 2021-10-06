import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnumAppRouter } from 'src/app/core/router-name';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  keySeach = '';

  constructor(private router: Router) { }

  handerSearch() {
    const str = this.keySeach.toLowerCase();
    this.router.navigate([EnumAppRouter.Blogs, EnumAppRouter.Search], { queryParams: { search: str } });
  }
}
